import { useEffect, useState } from 'react'
import styles from './FilterBar.module.scss'
import { disciplines } from '../../utils/constants'
import InputTypeSelect from '../../ui/inputs/InputTypeSelect/InputTypeSelect'
import InputTypeRadiobutton from '../../ui/inputs/InputTypeRadiobutton/InputTypeRadiobutton'
import InputTypeRadiobuttonIcon from '../../ui/inputs/InputTypeRadiobuttonIcon/InputTypeRadiobuttonIcon'
import MapIcon from '../../assets/images/components/map_icon.svg'
import ListIcon from '../../assets/images/components/list_icon.svg'
import InputTypeButtonClose from '../../ui/buttons/InputTypeButtonClose/InputTypeButtonClose'
import { useAppDispatch, useAppSelector } from '../../service/hooks'
import { getEvents } from '../../service/slices/eventsSlice'
import { getInfrastructure } from '../../service/slices/infrastructureSlice'
import {
  getIsMapDefaultView,
  getIsOfficePopupOpen,
  setIsEventMarkersVisible,
  setIsInfrastructureMarkersVisible,
} from '../../service/slices/mapSlice'
import {
  getContentTypeFilter,
  getDisciplineFilter,
  setContentTypeFilter,
  setDisciplineFilter,
} from '../../service/slices/filterSlice'
import {
  getRegions,
  getSelectedRegion,
  setFilteredRegions,
  setSelectedRegionEvents,
  setSelectedRegionInfrastructure,
} from '../../service/slices/regionsSlice'
import { IEventType, IInfrastructureType } from '../../api/apiTypes'
const FilterBar = () => {
  const dispatch = useAppDispatch()
  const fetchedEventsData = useAppSelector(getEvents)
  const fetchedInfrastructureData = useAppSelector(getInfrastructure)
  const fetchedRegionsData = useAppSelector(getRegions)
  const isMapDefaultView = useAppSelector(getIsMapDefaultView)
  const selectedRegion = useAppSelector(getSelectedRegion)
  const discipline = useAppSelector(getDisciplineFilter)
  const handleDisciplineChange = (value: string) => {
    dispatch(setDisciplineFilter(value))
  }
  const selectedDiscipline = disciplines.find(item => item.value === discipline)

  const contentTypeFilter = useAppSelector(getContentTypeFilter)
  const onContentTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setContentTypeFilter(e.target.value))
  }
  const isOfficePopupOpen = useAppSelector(getIsOfficePopupOpen)
  const [eventsCount, setEventsCount] = useState(0)
  const [infrastructureCount, setInfrastructureCount] = useState(0)

  const [presentationType, setPresentationType] = useState('map')
  const onPresentationTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPresentationType(e.target.value)
  }

  const filterAllRegions = (targetDiscipline: string, contentType: string) => {
    if (!targetDiscipline && contentType === 'all') {
      dispatch(setFilteredRegions(fetchedRegionsData))
      setEventsCount(fetchedEventsData.length)
      setInfrastructureCount(fetchedInfrastructureData.length)
      return
    }
    let regionWithDisciplineIdsByEvents: number[] = []
    let regionWithDisciplineIdsByInfrastructure: number[] = []
    let regionWithDisciplineIds: number[] = []

    const getRegionIdsByContentWithDiscipline = (
      contentArray: IEventType[] | IInfrastructureType[],
      discipline: string
    ): number[] => {
      const idArray: number[] = []
      contentArray.filter(item => {
        if (item.discipline.includes(discipline) || !discipline) {
          idArray.push(item.regionGeoId)
        }
      })
      return idArray
    }

    if (contentType === 'all' || contentType === 'events') {
      regionWithDisciplineIdsByEvents = getRegionIdsByContentWithDiscipline(
        fetchedEventsData,
        targetDiscipline
      )

      setEventsCount(regionWithDisciplineIdsByEvents.length)
    }
    if (contentType === 'all' || contentType === 'infrastructure') {
      regionWithDisciplineIdsByInfrastructure =
        getRegionIdsByContentWithDiscipline(
          fetchedInfrastructureData,
          targetDiscipline
        )

      setInfrastructureCount(regionWithDisciplineIdsByInfrastructure.length)
    }
    const ids = regionWithDisciplineIdsByEvents.concat(
      regionWithDisciplineIdsByInfrastructure
    )
    const uniqueIds = new Set(ids)
    regionWithDisciplineIds = Array.from(uniqueIds)

    const regionsWithDiscipline = fetchedRegionsData.filter(region =>
      regionWithDisciplineIds.some(id => id === region.geoId)
    )
    dispatch(setFilteredRegions(regionsWithDiscipline))
  }

  const filterSelectedRegion = (
    targetDiscipline: string,
    contentType: string
  ) => {
    if (!targetDiscipline) {
      dispatch(
        setSelectedRegionEvents(
          fetchedEventsData.filter(
            item => item.regionGeoId === selectedRegion.info.geoId
          )
        )
      )
      dispatch(
        setSelectedRegionInfrastructure(
          fetchedInfrastructureData.filter(
            item => item.regionGeoId === selectedRegion.info.geoId
          )
        )
      )
    }
    if (targetDiscipline) {
      dispatch(
        setSelectedRegionEvents(
          fetchedEventsData.filter(
            item =>
              item.regionGeoId === selectedRegion.info.geoId &&
              (item.discipline.includes(targetDiscipline) || !targetDiscipline)
          )
        )
      )
      dispatch(
        setSelectedRegionInfrastructure(
          fetchedInfrastructureData.filter(
            item =>
              item.regionGeoId === selectedRegion.info.geoId &&
              (item.discipline.includes(targetDiscipline) || !targetDiscipline)
          )
        )
      )
    }
    dispatch(
      setIsEventMarkersVisible(
        isMapDefaultView
          ? false
          : contentType === 'infrastructure'
          ? false
          : true
      )
    )
    dispatch(
      setIsInfrastructureMarkersVisible(
        isMapDefaultView ? false : contentType === 'events' ? false : true
      )
    )
  }

  useEffect(() => {
    setEventsCount(fetchedEventsData.length)
    setInfrastructureCount(fetchedInfrastructureData.length)
  }, [fetchedEventsData, fetchedInfrastructureData])

  useEffect(() => {
    if (isMapDefaultView) {
      filterAllRegions(discipline, contentTypeFilter)
    } else {
      filterSelectedRegion(discipline, contentTypeFilter)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discipline, contentTypeFilter, isMapDefaultView])

  useEffect(() => {
    if (isOfficePopupOpen) {
      filterSelectedRegion(discipline, contentTypeFilter)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOfficePopupOpen])

  useEffect(() => {
    if (!isMapDefaultView) {
      setEventsCount(selectedRegion.events.length)
      setInfrastructureCount(selectedRegion.infrastructure.length)
    }
  }, [
    discipline,
    selectedRegion.events.length,
    selectedRegion.infrastructure.length,
    isMapDefaultView,
  ])

  return (
    <div className={styles.filterBar}>
      <div className={styles.selectContainer}>
        <div className={styles.select}>
          <InputTypeSelect
            mode="rows"
            options={disciplines}
            onChange={handleDisciplineChange}
            selected={selectedDiscipline || null}
            placeholder="Все дисциплины"
          />
        </div>
        <InputTypeButtonClose
          disabled={discipline === ''}
          aria-label="Сбросить дисциплины"
          title="Сбросить дисциплины"
          onClick={() => dispatch(setDisciplineFilter(''))}
        />
      </div>
      <div className={styles.radioButtons}>
        <div className={styles.contentType}>
          <InputTypeRadiobutton
            label="Все"
            name="contentType"
            value="all"
            checked={contentTypeFilter === 'all'}
            countVisible={false}
            onChange={onContentTypeChange}
          />
          <InputTypeRadiobutton
            label="События"
            name="contentType"
            count={eventsCount}
            countVisible={true}
            value="events"
            checked={contentTypeFilter === 'events'}
            onChange={onContentTypeChange}
          />
          <InputTypeRadiobutton
            label="Объекты инфраструктуры"
            name="contentType"
            count={infrastructureCount}
            countVisible={true}
            value="infrastructure"
            checked={contentTypeFilter === 'infrastructure'}
            onChange={onContentTypeChange}
          />
        </div>
        <div className={styles.presentationType}>
          <InputTypeRadiobuttonIcon
            name="presentationType"
            value="map"
            id="map"
            checked={presentationType === 'map'}
            onChange={onPresentationTypeChange}
          >
            <div className={`${styles.icon} ${styles.mapIcon}`}>
              <MapIcon />
            </div>
          </InputTypeRadiobuttonIcon>
          <InputTypeRadiobuttonIcon
            name="presentationType"
            value="list"
            id="list"
            checked={presentationType === 'list'}
            onChange={onPresentationTypeChange}
          >
            <div className={`${styles.icon} ${styles.listIcon}`}>
              <ListIcon />
            </div>
          </InputTypeRadiobuttonIcon>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
