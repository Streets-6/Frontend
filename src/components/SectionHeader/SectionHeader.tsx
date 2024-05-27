import styles from './SectionHeader.module.scss'

type TSectionHeaderProps = {
  serialNumber: number | string
  title: string
}

const SectionHeader = (props: TSectionHeaderProps) => {
  const { serialNumber, title } = props
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.serialNumber}>{serialNumber}:</span>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </section>
  )
}

export default SectionHeader
