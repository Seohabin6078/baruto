'use client'

import React, { useState } from 'react'
import AuthInput from '../atoms/AuthInput'
import AuthButton from '../atoms/AuthButton'

export type AuthInputState = 'normal' | 'focus' | 'error'

const AuthForm = () => {
  const [inputState, setInputState] = useState<AuthInputState>('normal')
  
  function handleInputClick() {
    setInputState('focus')
  }
  function handleInputChange() {
  }
  function handleInputBlur() {
    // 유효성 검사 실시
    setInputState('normal')
  }

  return (
    <div>
      <AuthInput 
        type='email'
        label='이메일 주소'
        state={inputState}
        onClick={handleInputClick}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      
      <AuthButton size="normal" string="로그인" state="disabled" />
    </div>

  )
}

export default AuthForm