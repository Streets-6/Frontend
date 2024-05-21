import styles from './App.module.scss'
import Header from 'src/components/Header/Header'
// import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      {/* <Outlet /> */}
    </div>
  )
}

export default App
