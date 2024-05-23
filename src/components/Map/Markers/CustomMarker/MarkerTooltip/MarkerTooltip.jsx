import { getEventDates } from '../../../../../utils/utils'
import styles from './MarkerTooltip.module.scss'
import { Tooltip } from 'react-leaflet'

function MarkerTooltip({ data, type }) {
  const titleLength = data.title.length
  return (
    <Tooltip>
      <div className={styles.tooltipContainer}>
        {data.icon && (
          <img
            src={data.icon}
            className={styles.tooltipIcon}
            style={{
              width: titleLength > 27 ? '64px' : '44px',
              height: titleLength > 27 ? '64px' : '44px',
            }}
          />
        )}
        <div className={styles.tooltipTexts}>
          <h3 className={styles.tooltipTitle}>{data.title}</h3>
          <p className={styles.tooltipInfo}>
            {type === 'event'
              ? getEventDates(data?.startDate, data?.endDate)
              : data?.city}
          </p>
        </div>
      </div>
    </Tooltip>
  )
}

export default MarkerTooltip
