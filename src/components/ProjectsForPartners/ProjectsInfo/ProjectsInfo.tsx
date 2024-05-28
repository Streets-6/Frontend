import styles from './ProjectsInfo.module.scss'

const ProjectsInfo = () => {
  return (
    <section className={styles.section}>
      <div className={styles.contentBlock}>
        <h3 className={`${styles.title} ${styles.firstTitle}`}>
          флагманские федеральные проекты
        </h3>
        <ul className={styles.projects}>
          <li className={styles.project}>
            <p className={styles.projectNumber}>01.</p>
            <div className={styles.projectCard}>
              <p className={styles.projectHeader}>
                Международная конкурс-премия уличной культуры и спорта «КАРДО»
              </p>
              <p className={styles.projectDescription}>
                Проект транслирует идею #улицысегодня, где рассказывается о
                самых интересных деятелях и кейсах уличного мира, а лучшие
                получают поддержку
              </p>
              <div className={styles.projectFooter}>
                <div className={styles.projectStats}>
                  <p className={styles.statsName}>участники</p>
                  <p className={styles.statsValue}>64 тыс +</p>
                </div>
                <div className={styles.projectStats}>
                  <p className={styles.statsName}>медиа охват</p>
                  <p className={styles.statsValue}>76 млн</p>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.project}>
            <p className={styles.projectNumber}>02.</p>
            <div className={styles.projectCard}>
              <p className={styles.projectHeader}>
                Всероссийский образовательный форум «Улицы России»
              </p>
              <p className={styles.projectDescription}>
                Главная образовательная и дискуссионная площадка лидеров уличной
                культуры и спорта с представителями органов власти
              </p>
              <div className={styles.projectFooter}>
                <div className={styles.projectStats}>
                  <p className={styles.statsName}>лидеры</p>
                  <p className={styles.statsValue}>300</p>
                </div>
                <div className={styles.projectStats}>
                  <p className={styles.statsName}>медиа охват</p>
                  <p className={styles.statsValue}>5 млн</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.contentBlock}>
        <h3 className={`${styles.title} ${styles.secondTitle}`}>
          флагманские региональные проекты
        </h3>
      </div>
    </section>
  )
}

export default ProjectsInfo
