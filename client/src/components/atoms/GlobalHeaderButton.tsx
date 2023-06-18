import styles from '../../styles/header.module.scss' 

interface IGlobalHeaderButton {
  action: () => void
  string: string
}

const GlobalHeaderButton = ({action, string}: IGlobalHeaderButton) => {
  return (
    <button
      onClick={action}
      className={styles.setting_item} >
      {string}
    </button>
  )
}

export default GlobalHeaderButton