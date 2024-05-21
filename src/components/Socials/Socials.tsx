import { Link } from 'react-router-dom'
import YoutubeIcon from 'src/assets/images/icons/youtube.svg'
import VkIcon from 'src/assets/images/icons/vk.svg'
import TelegramIcon from 'src/assets/images/icons/telegram.svg'
import styles from './Socials.module.scss'

const Socials = () => {
  return (
    <ul className={styles.socials}>
      <li>
        <Link
          to="https://www.youtube.com/channel/UCse4y0X9dK0utXKtjwlZ1dg"
          target="blank"
          className={styles.socialLink}
        >
          <img
            src={YoutubeIcon}
            alt="Наш канал на YouTube"
            className={styles.socialIcon}
          />
        </Link>
      </li>
      <li>
        <Link
          to="https://vk.com/streetrf"
          target="blank"
          className={styles.socialLink}
        >
          <img
            src={VkIcon}
            alt="Наша страница на Vk"
            className={styles.socialIcon}
          />
        </Link>
      </li>
      <li>
        <Link to="#" target="blank" className={styles.socialLink}>
          <img
            src={TelegramIcon}
            alt="Наш Telegram-канал"
            className={styles.socialIcon}
          />
        </Link>
      </li>
    </ul>
  )
}

export default Socials
