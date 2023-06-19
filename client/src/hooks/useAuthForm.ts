import React, { useEffect, useState } from 'react'
import useAuthInput from './useAuthInput'
import useAuthButton, { ButtonState } from './useAuthButton'
import { validateAuth } from '@/util/string'

const useAuthForm = () => {
  const {
    value: email,
    inputState: emailState,
    handleInputBlur: emailInputOnBlur,
    handleInputChange: emailInputOnChange,
    handleInputClick: emailInputOnClick
  } = useAuthInput('email')

  const {
    value: password,
    inputState: passwordState,
    handleInputBlur: passwordInputOnBlur,
    handleInputChange: passwordInputOnChange,
    handleInputClick: passwordInputOnClick
  } = useAuthInput('password')

  const {
    state: buttonState,
    setState: setButtonState,
    size,
    string,
  } = useAuthButton('로그인', email, password)

  const [errorMessage, setErrorMessage] = useState('')

  const handleButtonOnSubmit = () => {
    setButtonState('loading')

    // 유효성 검사
    // non pass '에러 메시지'
    if (!validateAuth('email', email)) {
      setErrorMessage('이메일을 확인해주세요.')
      setButtonState('disabled')
      return
    }
    if (!validateAuth('password', password)) {
      setErrorMessage('비밀번호롤 확인해주세요.')
      setButtonState('disabled')
      return
    }
    // pass
    // 서버에 요청 보내기
    // non pass
    // pass
    // or try-catch
    
    
    setButtonState('accessible')
  }


  // const validateFail = (toState: string, message: string) => {

  // }

  return {
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
    state: buttonState,
    size,
    string,
    handleButtonOnSubmit,
  }
}

export default useAuthForm