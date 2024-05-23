import { useAppDispatch } from 'src/service/hooks'
import FilterBar from '../FilterBar/FilterBar'
import Map from '../Map/Map'
import styles from './App.module.scss'
import Header from 'src/components/Header/Header'
import { useEffect } from 'react'
import { fetchRegionsData } from 'src/service/slices/regionsSlice'
import { fetchInfrastructureData } from 'src/service/slices/infrastructureSlice'
import { fetchEventsData } from 'src/service/slices/eventsSlice'
// import { Outlet } from 'react-router-dom'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRegionsData())
    dispatch(fetchInfrastructureData())
    dispatch(fetchEventsData())
  }, [])
  return (
    <div className={styles.app}>
      <Header />
      <FilterBar />
      <Map />
      {/* <Outlet /> */}
    </div>
  )
}

export default App
