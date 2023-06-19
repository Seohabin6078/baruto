'use client'

import AuthInput from '../atoms/AuthInput'
import AuthButton from '../atoms/AuthButton'
import useAuthForm from '@/hooks/useAuthForm'


const AuthForm = () => {
  const {
    email,
    emailState,
    emailInputOnBlur,
    emailInputOnChange,
    emailInputOnClick,
    password,
    passwordState,
    passwordInputOnBlur,
    passwordInputOnChange,
    passwordInputOnClick,
    state,
    size,
    string,
    handleButtonOnSubmit,
  } = useAuthForm()


  // button disabled 해제되는 시점, 로직 고민하기
  return (
    <div>
      <AuthInput 
        type='email'
        label='이메일 주소'
        state={emailState}
        onClick={emailInputOnClick}
        onChange={emailInputOnChange}
        onBlur={emailInputOnBlur}
      />

      <AuthInput 
        type='password'
        label='비밀번호'
        state={passwordState}
        onClick={passwordInputOnClick}
        onChange={passwordInputOnChange}
        onBlur={passwordInputOnBlur}
      />
      
      <AuthButton
        size={size}
        string={string}
        state={state}
        action={handleButtonOnSubmit}
      />
    </div>

  )
}

export default AuthForm