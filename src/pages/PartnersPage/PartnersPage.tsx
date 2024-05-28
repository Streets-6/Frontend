import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'
import Intro from 'src/components/Intro/Intro'
import StreetsToday from 'src/components/StreetsToday/StreetsToday'
import Partners from 'src/components/Partners/Partners'
import Contacts from 'src/components/Contacts/Contacts'
import styles from './PartnersPage.module.scss'
import StreetRequest from 'src/components/StreetsRequest/StreetRequest'
import StreetsProjects from 'src/components/StreetsProjects/StreetsProjects'

const PartnersPage = () => {
  return (
    <div className={styles.partners}>
      <Header />
      <Intro />
      <StreetsToday />
      <StreetsProjects />
      <Partners />
      <StreetRequest />
      <Contacts />
      <Footer />
    </div>
  )
}

export default PartnersPage
