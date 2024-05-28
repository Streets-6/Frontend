import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'
import Intro from 'src/components/Intro/Intro'
import StreetsToday from 'src/components/StreetsToday/StreetsToday'
import Partners from 'src/components/Partners/Partners'
import ProjectsForPartners from 'src/components/ProjectsForPartners/ProjectsForPartners'
import Contacts from 'src/components/Contacts/Contacts'
import styles from './PartnersPage.module.scss'

const PartnersPage = () => {
  return (
    <div className={styles.partners}>
      <Header />
      <Intro />
      <StreetsToday />
      <Partners />
      <ProjectsForPartners />
      <Contacts />
      <Footer />
    </div>
  )
}

export default PartnersPage
