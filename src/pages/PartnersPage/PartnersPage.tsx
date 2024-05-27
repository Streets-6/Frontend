import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'
import Intro from 'src/components/Intro/Intro'
import StreetsToday from 'src/components/StreetsToday/StreetsToday'
import styles from './PartnersPage.module.scss'
import Partners from 'src/components/Partners/Partners'

const PartnersPage = () => {
  return (
    <div className={styles.partners}>
      <Header />
      <Intro />
      <StreetsToday />
      <Partners />
      <Footer />
    </div>
  )
}

export default PartnersPage
