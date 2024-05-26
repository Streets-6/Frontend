import { useAppDispatch, useAppSelector } from 'src/service/hooks'
import styles from './RegionsList.module.scss'
import {
  getFilteredRegions,
  getSelectedRegion,
  setSelectedRegion,
} from 'src/service/slices/regionsSlice'
import { regionsGeoData } from 'src/utils/regionsGeoData'
import { getEvents } from 'src/service/slices/eventsSlice'
import { getInfrastructure } from 'src/service/slices/infrastructureSlice'
import { defaultSelectedRegion } from 'src/utils/constDefaultSelectedRegion'

const RegionsList = () => {
  const dispatch = useAppDispatch()
  const filteredRegions = useAppSelector(getFilteredRegions)
  const fetchedEventsData = useAppSelector(getEvents)
  const fetchedInfrastructureData = useAppSelector(getInfrastructure)
  const selectedRegion = useAppSelector(getSelectedRegion)

  return (
    <ul className={styles.list}>
      {filteredRegions.map(region => {
        const currentRegionGeoData = regionsGeoData.features.find(
          item => item.id === region.geoId
        )
        return (
          <li
            key={region.id}
            className={styles.listItem}
            onClick={() => {
              console.log(selectedRegion)
              dispatch(
                setSelectedRegion({
                  info: region,
                  geoData:
                    currentRegionGeoData?.properties ||
                    defaultSelectedRegion.geoData,
                  events: fetchedEventsData.filter(
                    item => item.regionGeoId === region.geoId
                  ),
                  infrastructure: fetchedInfrastructureData.filter(
                    item => item.regionGeoId === region.geoId
                  ),
                })
              )
            }}
          >
            {currentRegionGeoData?.properties.name}
          </li>
        )
      })}
    </ul>
  )
}

export default RegionsList
