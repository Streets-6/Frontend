import { ISelectedRegionType } from 'src/utils/types'
import styles from './SelectedRegion.module.scss'
import MapHeader from 'src/components/Map/MapHeader/MapHeader'
import EventCard from './EventCard/EventCard'
import {
  DEFAULT_VISIBLE_EVENTS,
  DEFAULT_VISIBLE_INFRASTRUCTURE,
  VISIBLE_EVENTS_INCREMENT,
  VISIBLE_INFRASTRUCTURE_INCREMENT,
} from 'src/utils/constants'
import { useState } from 'react'
import { useAppSelector } from 'src/service/hooks'
import { getContentTypeFilter } from 'src/service/slices/filterSlice'
import InfrastructureCard from './InfrastructureCard/InfrastructureCard'

interface ISelectedRegionProps {
  data: ISelectedRegionType
}

const SelectedRegion = (props: ISelectedRegionProps) => {
  const { data } = props

  const [visibleEvent, setVisibleEvents] = useState(DEFAULT_VISIBLE_EVENTS)
  const showMoreEvents = () => {
    setVisibleEvents((prev: number) => prev + VISIBLE_EVENTS_INCREMENT)
  }
  const [visibleInfrastructure, setVisibleInfrastructure] = useState(
    DEFAULT_VISIBLE_INFRASTRUCTURE
  )
  const showMoreInfrastructure = () => {
    setVisibleInfrastructure(
      (prev: number) => prev + VISIBLE_INFRASTRUCTURE_INCREMENT
    )
  }
  const contentTypeFilter = useAppSelector(getContentTypeFilter)
  return (
    <div className={styles.region}>
      <MapHeader data={data.info} isMapHeaderVisible={true} />

      {contentTypeFilter !== 'infrastructure' && (
        <div className={styles.subsection}>
          <h3 className={styles.title}>Ближайшие события</h3>

          {data?.events.length === 0 ? (
            <p className={styles.noItems}>В ближайшее время событий нет</p>
          ) : (
            <>
              <ul className={`${styles.list} ${styles.eventsList}`}>
                {data?.events.slice(0, visibleEvent).map(item => (
                  <EventCard data={item} key={item.id} />
                ))}
              </ul>
              {visibleEvent < data?.events.length && (
                <button className={styles.button} onClick={showMoreEvents}>
                  Показать еще
                </button>
              )}
            </>
          )}
        </div>
      )}
      {contentTypeFilter !== 'events' && (
        <div className={styles.subsection}>
          <h3 className={styles.title}>Объекты инфраструктуры</h3>
          {data?.infrastructure.length === 0 ? (
            <p className={styles.noItems}>Нет объектов инфраструктуры</p>
          ) : (
            <>
              <ul className={`${styles.list} ${styles.infrastructureList}`}>
                {data?.infrastructure
                  .slice(0, visibleInfrastructure)
                  .map(item => (
                    <InfrastructureCard data={item} key={item.id} />
                  ))}
              </ul>
              {visibleInfrastructure < data?.infrastructure.length && (
                <button
                  className={styles.button}
                  onClick={showMoreInfrastructure}
                >
                  Показать еще
                </button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default SelectedRegion
