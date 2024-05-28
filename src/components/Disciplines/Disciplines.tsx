import { disciplinesMockData } from 'src/utils/mock/disciplinesMockData'
import styles from './Disciplines.module.scss'
import DisciplineCard from './DisciplineCard/DisciplineCard'

const Disciplines = () => {
  return (
    <section className={styles.disciplines} id="disciplines">
      <h2 className={styles.title}>Дисциплины</h2>
      <ul className={styles.list}>
        {disciplinesMockData.map(item => (
          <DisciplineCard data={item} key={item.id} />
        ))}
      </ul>
    </section>
  )
}

export default Disciplines
