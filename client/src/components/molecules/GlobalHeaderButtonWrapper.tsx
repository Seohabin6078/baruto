'use client'

import styles from '../../styles/header.module.scss' 
import GlobalHeaderButton from '../atoms/GlobalHeaderButton'

interface IGlobalHeaderButton {
  isLoggedIn: boolean
}

const GlobalHeaderButtonWrapper = ({ isLoggedIn }: IGlobalHeaderButton) => {
  
  function a() {
    console.log('a')
  }

  if (!isLoggedIn) return (
    <div className={styles.settings} >
      <GlobalHeaderButton action={a} string={'로그인'}/>
    </div>
  )

  return (
    <div className={styles.settings} >
      <GlobalHeaderButton action={a} string={'alert'} />
      
      <GlobalHeaderButton action={a} string={'mypage'} />

      <GlobalHeaderButton action={a} string={'setting'} />
    </div>
  )
}

export default GlobalHeaderButtonWrapper