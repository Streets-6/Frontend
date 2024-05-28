import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './StreetsProjects.module.scss'

const StreetsProjects = () => {
  return (
    <section className={styles.streetsProjects} id="our-projects">
      <SectionHeader serialNumber={2} title="Проекты «Улиц России»" />
      <div className={styles.federal}>
        <h3 className={styles.title}>флагманские федеральные проекты</h3>
        <ul className={styles.federalList}>
          <li className={styles.federalProject}>
            <h4 className={styles.number}>01.</h4>
            <div className={styles.projectInfo}>
              <h5 className={styles.projectTitle}>
                Международная конкурс-премия уличной культуры и спорта «КАРДО»
              </h5>
              <p className={styles.projectDescription}>
                Проект транслирует идею #улицысегодня, где рассказывается о
                самых интересных деятелях и кейсах уличного мира, а лучшие
                получают поддержку
              </p>
              <ul className={styles.stats}>
                <li className={styles.statItem}>
                  <h6 className={styles.statTitle}>участники</h6>
                  <p className={styles.statValue}>64 тыс +</p>
                </li>
                <li className={styles.statItem}>
                  <h6 className={styles.statTitle}>медиа охват</h6>
                  <p className={styles.statValue}>76 млн</p>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.federalProject}>
            <h4 className={styles.number}>02.</h4>
            <div className={styles.projectInfo}>
              <h5 className={styles.projectTitle}>
                Всероссийский образовательный форум «Улицы России»
              </h5>
              <p className={styles.projectDescription}>
                Главная образовательная и дискуссионная площадка лидеров уличной
                культуры и спорта с представителями органов власти
              </p>
              <ul className={styles.stats}>
                <li className={styles.statItem}>
                  <h6 className={styles.statTitle}>лидеры</h6>
                  <p className={styles.statValue}>300</p>
                </li>
                <li className={styles.statItem}>
                  <h6 className={styles.statTitle}>медиа охват</h6>
                  <p className={styles.statValue}>5 млн</p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default StreetsProjects
