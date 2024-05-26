import { ISelectedRegionType } from 'src/utils/types'
import styles from './SelectedRegion.module.scss'

interface ISelectedRegionProps {
  data: ISelectedRegionType
}

const SelectedRegion = (props: ISelectedRegionProps) => {
  const { data } = props
  return <div className={styles.region}></div>
}

export default SelectedRegion
