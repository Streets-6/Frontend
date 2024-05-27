import { useAppDispatch } from 'src/service/hooks'
import styles from './App.module.scss'
import Header from 'src/components/Header/Header'
import { useEffect } from 'react'
import { fetchRegionsData } from 'src/service/slices/regionsSlice'
import { fetchInfrastructureData } from 'src/service/slices/infrastructureSlice'
import { fetchEventsData } from 'src/service/slices/eventsSlice'
import Promo from '../Promo/Promo'
import About from '../About/About'
import Projects from '../Projects/Projects'
import { fetchProjectsData } from 'src/service/slices/projectsSlice'
import News from '../News/News'
import { fetchNewsData } from 'src/service/slices/newsSlice'
import Summary from '../Summary/Summary'
import PresenceRegions from '../PresenceRegions/PresenceRegions'
// import { Outlet } from 'react-router-dom'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRegionsData())
    dispatch(fetchInfrastructureData())
    dispatch(fetchEventsData())
    dispatch(fetchProjectsData())
    dispatch(fetchNewsData())
    // disable lint because we need fetch data only once when app loaded first time
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className={styles.app}>
      <Header />
      <Promo />
      <About />
      <Summary />
      <PresenceRegions />
      <Projects />
      <News />
      {/* <Outlet /> */}
    </div>
  )
}

export default App
