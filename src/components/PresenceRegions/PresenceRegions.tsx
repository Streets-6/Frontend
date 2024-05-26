import { useAppSelector } from 'src/service/hooks'
import FilterBar from '../FilterBar/FilterBar'
import Map from '../Map/Map'
import styles from './PresenceRegions.module.scss'
import { getPresentationType } from 'src/service/slices/filterSlice'

const PresenceRegions = () => {
  const presentationType = useAppSelector(getPresentationType)
  return (
    <section className={styles.section}>
      <FilterBar />
      {presentationType === 'map' ? <Map /> : <div>list</div>}
    </section>
  )
}

export default PresenceRegions
