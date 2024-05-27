import styles from './WebCamera.module.scss';

function WebCamera() {
  return (
    <div className={styles.webCamera}>
      <div className={styles.webCamera__header}>
        <div className={styles.webCamera__textWrapper}>
          <h3 className={styles.webCamera__title}>Веб-камера онлайн</h3>
          <p className={styles.webCamera__description}>
            Смотрите заранее занятость площадки, а также демонстрируйте свои умения друзьям и
            знакомым из других городов в режиме онлайн
          </p>
        </div>
      </div>
      <iframe
        className={styles.webCamera__stream}
        src="http://93.157.173.6:8080/295/embed.html?realtime&amp;token=7922664ca758eef7e"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WebCamera;
