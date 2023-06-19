import { ButtonSize, ButtonState } from '@/hooks/useAuthButton'
import '../../styles/AuthButton.scss'


interface IAuthButton {
  action: () => void,
  string: string,
  size: ButtonSize
  state: ButtonState
}

const AuthButton = ({action, string, size, state}: IAuthButton) => {
  return (
    <button
      className={getClassName(size, state)}
      onClick={action}
    >
      {state === 'loading' ? '로딩중...' : string}
    </button>
  )
}

export default AuthButton


const getClassName = (size: ButtonSize, state: ButtonState) => {
  return ['auth-button', getClassNameBySize(size), getClassNameByState(state)].join(' ')
}

const getClassNameByState = (state: ButtonState = 'accessible') => {
  switch (state) {
    case 'accessible':
      return 'auth-button--accessible'
    case 'disabled':
      return 'auth-button--disabled'
    case 'loading':
      return 'auth-button--loading'
  }
}

const getClassNameBySize = (size: ButtonSize = 'normal') => {
  if (size === 'normal') return 'auth-button--normal'

  if (size === 'large') return 'auth-button--large'
}