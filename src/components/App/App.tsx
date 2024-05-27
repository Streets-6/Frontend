import { Outlet } from 'react-router-dom'
import styles from './App.module.scss'
import { useAppSelector } from 'src/service/hooks'
import {
  getIsAuthModalOpen,
  getIsDonateModalOpen,
} from 'src/service/slices/modalsSlice'
import AuthModal from '../Modal/AuthModal/AuthModal'
import DonateModal from '../Modal/DonateModal/DonateModal'

const App = () => {
  const isAuthModalOpen = useAppSelector(getIsAuthModalOpen)
  const isDonateModalOpen = useAppSelector(getIsDonateModalOpen)
  return (
    <div className={styles.app}>
      <Outlet />
      {isAuthModalOpen && <AuthModal />}
      {isDonateModalOpen && <DonateModal />}
    </div>
  )
}

export default App
