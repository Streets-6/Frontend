import { useEffect } from 'react'
import { useAppDispatch } from 'src/service/hooks'
import { fetchRegionsData } from 'src/service/slices/regionsSlice'
import { fetchInfrastructureData } from 'src/service/slices/infrastructureSlice'
import { fetchEventsData } from 'src/service/slices/eventsSlice'
import { fetchProjectsData } from 'src/service/slices/projectsSlice'
import { fetchNewsData } from 'src/service/slices/newsSlice'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'
import Promo from 'src/components/Promo/Promo'
import About from 'src/components/About/About'
import Projects from 'src/components/Projects/Projects'
import News from 'src/components/News/News'
import styles from './MainPage.module.scss'
import Summary from 'src/components/Summary/Summary'
import PresenceRegions from 'src/components/PresenceRegions/PresenceRegions'
import Disciplines from 'src/components/Disciplines/Disciplines'

const MainPage = () => {
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
    <div className={styles.main}>
      <Header />
      <Promo />
      <About />
      <Summary />
      <PresenceRegions />
      <Disciplines />
      <Projects />
      <News />
      <Footer />
    </div>
  )
}

export default MainPage
