import SectionHeader from '../SectionHeader/SectionHeader'
import Statistics from './Statistics/Statistics'
import styles from './StreetsToday.module.scss'

const StreetsToday = () => {
  return (
    <section className={styles.container}>
      <SectionHeader serialNumber={1} title="«Улицы России» сегодня" />
      <Statistics />
    </section>
  )
}

export default StreetsToday
