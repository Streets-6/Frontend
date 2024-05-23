import { useAppSelector } from 'src/service/hooks'
import FilterBar from '../FilterBar/FilterBar'
import Map from '../Map/Map'
import styles from './ActivityPresentation.module.scss'
import { getPresentationType } from 'src/service/slices/filterSlice'

const ActivityPresentation = () => {
  const presentationType = useAppSelector(getPresentationType)
  return (
    <section className={styles.section}>
      <FilterBar />
      {presentationType === 'map' ? <Map /> : <div>list</div>}
    </section>
  )
}

export default ActivityPresentation
