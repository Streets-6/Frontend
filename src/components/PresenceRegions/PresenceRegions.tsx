import { useAppDispatch, useAppSelector } from 'src/service/hooks'
import FilterBar from '../FilterBar/FilterBar'
import Map from '../Map/Map'
import styles from './PresenceRegions.module.scss'
import { getPresentationType } from 'src/service/slices/filterSlice'
import RegionsList from './RegionsList/RegionsList'
import {
  getRegions,
  getSelectedRegion,
  setFilteredRegions,
  setSelectedRegion,
} from 'src/service/slices/regionsSlice'
import { useEffect } from 'react'
import { defaultSelectedRegion } from 'src/utils/constDefaultSelectedRegion'

const PresenceRegions = () => {
  const dispatch = useAppDispatch()
  const presentationType = useAppSelector(getPresentationType)
  const fetchedRegionsData = useAppSelector(getRegions)
  useEffect(() => {
    dispatch(setFilteredRegions(fetchedRegionsData))
  }, [fetchedRegionsData, dispatch])
  const selectedRegion = useAppSelector(getSelectedRegion)
  return (
    <section className={styles.presence} id="presence">
      <h2 className={styles.title}>Регионы присутствия</h2>
      {selectedRegion.info.id === 0 ? (
        <p className={styles.hint}>
          Выберите дисциплину и/или регион, чтобы посмотреть площадки и события
          в выбранном регионе
        </p>
      ) : (
        <button
          className={styles.button}
          onClick={() => dispatch(setSelectedRegion(defaultSelectedRegion))}
        >
          Вернуться к выбору региона
        </button>
      )}
      <FilterBar />
      {presentationType === 'map' ? <Map /> : <RegionsList />}
    </section>
  )
}

export default PresenceRegions
