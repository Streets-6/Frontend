import './Map.scss'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet'
import MapControl from './MapControl/MapControl'
import { useState } from 'react'
import { regionsGeoData } from '../../utils/regionsGeoData'
import OfficePopup from './Popups/OfficePopup/OfficePopup'
import CustomMarker from './Markers/CustomMarker/CustomMarker'
import MarkerPopup from './Popups/MarkerPopup/MarkerPopup'
import MapHeader from './MapHeader/MapHeader'
import MarkerCluster from './Markers/MarkerCluster/MarkerCluster'
import { useAppDispatch, useAppSelector } from '../../service/hooks'
import {
  getFilteredRegions,
  getRegions,
  getSelectedRegion,
  setFilteredRegions,
  setSelectedRegion,
} from '../../service/slices/regionsSlice'
import { getInfrastructure } from '../../service/slices/infrastructureSlice'
import { getEvents } from '../../service/slices/eventsSlice'
import {
  getIsEventMarkersVisible,
  getIsInfrastructureMarkersVisible,
  getIsMapDefaultView,
  getIsMapHeaderVisible,
  getIsMarkerPopupOpen,
  getIsOfficePopupOpen,
  getMap,
  setIsEventMarkersVisible,
  setIsInfrastructureMarkersVisible,
  setIsMapHeaderVisible,
  setIsMarkerPopupOpen,
  setIsOfficePopupOpen,
} from '../../service/slices/mapSlice'
import {
  INITIAL_OUTER_BOUNDS,
  INITIAL_ZOOM_LEVEL,
  MAP_CENTER_COORDINATES,
  MARKER_ZOOM_LEVEL,
  MAX_BOUNDS_VISCOSITY,
  MAX_ZOOM_LEVEL,
  ZOOM_DELTA,
  ZOOM_SNAP,
} from '../../utils/constants'
import { defaultSelectedRegion } from 'src/utils/constDefaultSelectedRegion'

function Map() {
  const dispatch = useAppDispatch()

  const fetchedRegionsData = useAppSelector(getRegions)
  const selectedRegion = useAppSelector(getSelectedRegion)
  const filteredRegionsData = useAppSelector(getFilteredRegions)

  const fetchedEventsData = useAppSelector(getEvents)
  const fetchedInfrastructureData = useAppSelector(getInfrastructure)

  const [popupData, setPopupData] = useState(null)

  const map = useAppSelector(getMap)
  const isMapDefaultView = useAppSelector(getIsMapDefaultView)
  const isMapHeaderVisible = useAppSelector(getIsMapHeaderVisible)
  const isOfficePopupOpen = useAppSelector(getIsOfficePopupOpen)
  const isMarkerPopupOpen = useAppSelector(getIsMarkerPopupOpen)
  const isInfrastructureMarkersVisible = useAppSelector(
    getIsInfrastructureMarkersVisible
  )
  const isEventMarkersVisible = useAppSelector(getIsEventMarkersVisible)

  function onResetMapClick() {
    dispatch(setIsMapHeaderVisible(false))
    dispatch(setFilteredRegions(fetchedRegionsData))
    dispatch(setIsInfrastructureMarkersVisible(false))
    dispatch(setIsEventMarkersVisible(false))
    map.setMaxBounds(INITIAL_OUTER_BOUNDS)
    map.setMinZoom(INITIAL_ZOOM_LEVEL)
    map.flyToBounds(INITIAL_OUTER_BOUNDS)
    // timeout need for data reset after header is gone
    setTimeout(() => {
      dispatch(setSelectedRegion(defaultSelectedRegion))
    }, 200)
  }

  const getMarkerElements = (markerDataArray, markerType) => {
    return markerDataArray.map(item => {
      return (
        <CustomMarker
          key={item.id}
          type={markerType}
          data={item}
          eventHandlers={{
            click: () => {
              setPopupData({ info: item, type: markerType })
              dispatch(setIsMarkerPopupOpen(true))
              map.flyTo(item.coordinates, MARKER_ZOOM_LEVEL)
            },
          }}
        />
      )
    })
  }

  return (
    <div className="map">
      <MapHeader
        data={selectedRegion?.info}
        isMapHeaderVisible={isMapHeaderVisible && !isMarkerPopupOpen}
      />
      <MapContainer
        center={MAP_CENTER_COORDINATES}
        zoom={
          selectedRegion?.info.id === 0 || isMapDefaultView
            ? INITIAL_ZOOM_LEVEL
            : map.getZoom()
        }
        minZoom={INITIAL_ZOOM_LEVEL}
        maxZoom={MAX_ZOOM_LEVEL}
        style={{ width: '100%', height: '100%', backgroundColor: 'inherit' }}
        zoomSnap={ZOOM_SNAP}
        zoomDelta={ZOOM_DELTA}
        maxBoundsViscosity={MAX_BOUNDS_VISCOSITY}
      >
        {!isMarkerPopupOpen && (
          <button className="map__resetButton" onClick={onResetMapClick}>
            Сбросить фильтры
          </button>
        )}
        <MapControl />
        <TileLayer
          detectRetina={true}
          keepBuffer={100}
          opacity={isMapDefaultView ? 0 : 1}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></TileLayer>
        {regionsGeoData.features.map(region => {
          var coordinates = []
          if (region.geometry.type === 'Polygon') {
            coordinates = region.geometry.coordinates[0]?.map(coordinate => [
              coordinate[1],
              coordinate[0],
            ])
          } else {
            region.geometry.coordinates.map(array => {
              const polyCoord = []
              array[0]?.map(poly => {
                polyCoord.push([poly[1], poly[0]])
              })
              coordinates.push(polyCoord)
            })
          }

          const currentRegion = filteredRegionsData.find(
            item => item.geoId === region.id
          )

          return (
            <Polygon
              key={region.id}
              pathOptions={{
                fillColor: currentRegion ? '#1e5b9c' : '#fff',
                fillOpacity: 0.7,
                weight: isMapDefaultView
                  ? 1
                  : selectedRegion?.info.geoId === region.id
                  ? 2
                  : 0,
                opacity: 1,
                dashArray: 0,
                color: isMapDefaultView ? 'black' : '#1e5b9c',

                fill: isMapDefaultView,
              }}
              positions={coordinates}
              eventHandlers={{
                mouseover: e => {
                  const layer = e.target
                  layer.setStyle({
                    fillOpacity: 1,
                  })
                },
                mouseout: e => {
                  const layer = e.target
                  layer.setStyle({
                    fillOpacity: 0.7,
                  })
                },
                click: () => {
                  if (currentRegion && isMapDefaultView) {
                    dispatch(
                      setSelectedRegion({
                        info: currentRegion,
                        geoData: region.properties,
                        events: fetchedEventsData.filter(
                          item => item.regionGeoId === currentRegion.geoId
                        ),
                        infrastructure: fetchedInfrastructureData.filter(
                          item => item.regionGeoId === currentRegion.geoId
                        ),
                      })
                    )
                    dispatch(setIsOfficePopupOpen(true))
                  }
                },
              }}
            >
              <Tooltip sticky>{region.properties.name}</Tooltip>
            </Polygon>
          )
        })}
        <MarkerCluster>
          {isInfrastructureMarkersVisible &&
            getMarkerElements(selectedRegion.infrastructure, 'infrastructure')}
          {isEventMarkersVisible &&
            getMarkerElements(selectedRegion.events, 'event')}
        </MarkerCluster>
      </MapContainer>
      {isOfficePopupOpen && <OfficePopup />}
      {isMarkerPopupOpen && <MarkerPopup data={popupData} />}
    </div>
  )
}

export default Map
