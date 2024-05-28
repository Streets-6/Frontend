import SectionHeader from '../SectionHeader/SectionHeader'
import Statistics from './Statistics/Statistics'
import Goals from './Goals/Goals'

const StreetsToday = () => {
  return (
    <section id="streets-today">
      <SectionHeader serialNumber={1} title="«Улицы России» сегодня" />
      <Statistics />
      <Goals />
    </section>
  )
}

export default StreetsToday
