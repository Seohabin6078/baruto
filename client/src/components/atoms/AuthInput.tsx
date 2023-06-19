import { AuthInputState } from '@/hooks/useAuthInput'
import '../../styles/AuthInput.scss'

type AuthInputType = 'email' | 'password'

interface IAuthInput {
  state: AuthInputState
  label: string
  type: AuthInputType
  onClick: () => void
  onChange: (value: string) => void
  onBlur: () => void
}

const AuthInput = ({state, label, type, onClick, onChange, onBlur}: IAuthInput) => {
  return (
    <div className='auth-input-container'>
      <input
        onClick={onClick}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        type={type}
        className={getInputClassName(state)}
      />
      
      <label className='auth-input-label' >{label}</label>
    </div>
  )
}

export default AuthInput


// input
const getInputClassName = (state: AuthInputState) => {
  return ['auth-input', getInputClassNameByState(state)].join(' ')
}
const getInputClassNameByState = (state: AuthInputState) => {
  switch (state) {
    case 'focus':
      return 'auth-input--focus'
    case 'error':
      return 'auth-input--error'
    case 'normal':
      return '';
  }
}

// label
// const getLabelClassName = (state: AuthInputState) => {
//   return ['', getLabelClassNameByState(state)].join(' ')
// }
// const getLabelClassNameByState = (state: AuthInputState) => {
//   switch (state) {
//     case 'focus':
//       return 'auth-input-label--focus'
//     case 'error':
//       return 'auth-input-label--error'
//     case 'normal':
//       return '';
//   }
// }
