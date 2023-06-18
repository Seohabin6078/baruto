import styles from '../../styles/header.module.scss' 
import GlobalHeaderButton from '../molecules/GlobalHeaderButtonWrapper'

interface IUser {

}

interface IGlobalHeader {
  user?: IUser
  isLoggedIn: boolean
}

const GlobalHeader = ({isLoggedIn}: IGlobalHeader) => {
  return (
    <header className={styles.container} >
      <div className={styles.logo} >Logo</div>

      <GlobalHeaderButton isLoggedIn={isLoggedIn} />
    </header>
  )
}

export default GlobalHeader