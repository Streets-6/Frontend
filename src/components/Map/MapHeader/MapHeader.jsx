import { formatPhoneNumber } from '../../../utils/utils';
import styles from './MapHeader.module.scss';

function MapHeader({ data, isMapHeaderVisible }) {
  return (
    <div className={`${styles.mapHeader} ${isMapHeaderVisible ? styles.mapHeader_opened : ''}`}>
      <h2 className={styles.mapHeader__title}>{data?.title}</h2>
      <div className={styles.mapHeader__chairmain}>
        <img
          className={styles.mapHeader__chairmainAvatar}
          src={data?.chairman.avatarUrl}
          alt="Аватар председателя"
        />
        <div className={styles.mapHeader__chairmanInfo}>
          <h4
            className={styles.mapHeader__name}
          >{`${data?.chairman.firstName} ${data?.chairman.lastName}`}</h4>
          <span className={styles.mapHeader__jobTitle}>{data?.chairman.jobTitle}</span>
          <div className={styles.mapHeader__textGroup}>
            <span className={`${styles.mapHeader__contact} ${styles.mapHeader__phone}`}>
              {formatPhoneNumber(data?.chairman.phoneNumber)}
            </span>
            <span className={`${styles.mapHeader__contact} ${styles.mapHeader__email}`}>
              {data?.chairman.email}
            </span>

            <a
              className={`${styles.mapHeader__contact} ${styles.mapHeader__link}`}
              href={data?.chairman.vk}
              target="_blank"
              rel="noreferrer"
            >
              Вконтакте
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapHeader;
