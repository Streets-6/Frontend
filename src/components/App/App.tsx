import { Outlet } from 'react-router-dom'
import styles from './App.module.scss'
import { useAppSelector } from 'src/service/hooks'
import { getIsAuthModalOpen } from 'src/service/slices/modalsSlice'
import AuthModal from '../Modal/AuthModal/AuthModal'

const App = () => {
  const isAuthModalOpen = useAppSelector(getIsAuthModalOpen)
  return (
    <div className={styles.app}>
      <Outlet />
      {isAuthModalOpen && <AuthModal />}
    </div>
  )
}

export default App
