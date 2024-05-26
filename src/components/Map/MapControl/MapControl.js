import { useEffect } from 'react'
import { useMapEvents } from 'react-leaflet'
import { useAppDispatch, useAppSelector } from '../../../service/hooks'
import {
  getSelectedRegion,
  setSelectedRegion,
} from '../../../service/slices/regionsSlice'
import {
  getIsEventButtonClicked,
  getIsInfrastructureButtonClicked,
  setIsEventButtonClicked,
  setIsEventMarkersVisible,
  setIsInfrastructureButtonClicked,
  setIsInfrastructureMarkersVisible,
  setIsMapDefaultView,
  setIsMapHeaderVisible,
  setMapInstance,
} from '../../../service/slices/mapSlice'
import {
  INITIAL_OUTER_BOUNDS,
  INITIAL_ZOOM_LEVEL,
} from '../../../utils/constants'
import {
  getPresentationType,
  setContentTypeFilter,
  setDisciplineFilter,
} from 'src/service/slices/filterSlice'
import { defaultSelectedRegion } from 'src/utils/constDefaultSelectedRegion'

function MapControl() {
  const currentPresentationType = useAppSelector(getPresentationType)

  const dispatch = useAppDispatch()
  const selectedRegion = useAppSelector(getSelectedRegion)
  const isInfrastructureButtonClicked = useAppSelector(
    getIsInfrastructureButtonClicked
  )
  const isEventButtonClicked = useAppSelector(getIsEventButtonClicked)
  const map = useMapEvents({
    moveend: () => {
      if (isInfrastructureButtonClicked) {
        dispatch(setIsInfrastructureMarkersVisible(true))
        dispatch(setIsMapDefaultView(false))
        dispatch(setIsInfrastructureButtonClicked(false))
        map.setMaxBounds(selectedRegion.geoData.bounds)
        map.setMinZoom(map.getZoom())
      }
      if (isEventButtonClicked) {
        dispatch(setIsEventMarkersVisible(true))
        dispatch(setIsMapDefaultView(false))
        dispatch(setIsEventButtonClicked(false))
        map.setMaxBounds(selectedRegion.geoData.bounds)
        map.setMinZoom(map.getZoom())
      }
    },
    zoomend: () => {
      if (map.getZoom() === INITIAL_ZOOM_LEVEL) {
        dispatch(setSelectedRegion(defaultSelectedRegion))
        dispatch(setIsMapHeaderVisible(false))
        dispatch(setIsInfrastructureMarkersVisible(false))
        dispatch(setIsEventMarkersVisible(false))
        dispatch(setIsMapDefaultView(true))
        dispatch(setDisciplineFilter(''))
        dispatch(setContentTypeFilter('all'))
        map.setMaxBounds(INITIAL_OUTER_BOUNDS)
      }
    },
  })

  useEffect(() => {
    dispatch(setMapInstance(map))

    // disable eslint rule because we need to set map instance only once when component render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (currentPresentationType === 'map' && selectedRegion?.info.id !== 0) {
      dispatch(setIsMapHeaderVisible(true))
    }
  }, [currentPresentationType, map, selectedRegion?.info.id, dispatch])

  return null
}

export default MapControl
