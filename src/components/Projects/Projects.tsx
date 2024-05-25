import { useAppSelector } from 'src/service/hooks'
import Project from './Project/Project'
import styles from './Projects.module.scss'
import {
  getCompletedProjects,
  getFirstCurrentProject,
} from 'src/service/slices/projectsSlice'
import { VISIBLE_PROJECTS_COUNT } from 'src/utils/constants'

const Projects = () => {
  const completedProjects = useAppSelector(getCompletedProjects)
  const firstCurrentProject = useAppSelector(getFirstCurrentProject)

  return (
    <section className={styles.projects} id={'projects'}>
      <h2 className={styles.title}>Инициативы</h2>
      <div className={styles.subSection}>
        <h3 className={styles.title}>Уже сделали</h3>
        <ul className={styles.list}>
          {completedProjects.slice(0, VISIBLE_PROJECTS_COUNT).map(item => (
            <Project data={item} key={item.id} />
          ))}
        </ul>
        <button className={styles.button}>Все инициативы</button>
      </div>
      <div className={styles.subSection}>
        <h3 className={styles.title}>Создаем</h3>
        <Project data={firstCurrentProject} />
      </div>
      <button className={styles.button}>Поддержать организацию</button>
    </section>
  )
}

export default Projects
