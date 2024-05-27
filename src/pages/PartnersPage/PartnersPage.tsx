import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'
import Intro from 'src/components/Intro/Intro'
import StreetsToday from 'src/components/StreetsToday/StreetsToday'
import styles from './PartnersPage.module.scss'

const PartnersPage = () => {
  return (
    <div className={styles.partners}>
      <Header />
      <Intro />
      <StreetsToday />
      <Footer />
    </div>
  )
}

export default PartnersPage
