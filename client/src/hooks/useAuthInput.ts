import { validateAuth } from "@/util/string"
import { useState } from "react"

export type AuthInputState = 'normal' | 'focus' | 'error'


const useAuthInput = (type: 'email' | 'password' | 'nickname') => {
  const [inputState, setInputState] = useState<AuthInputState>('normal')
  const [value, setValue] = useState('')

  function handleInputClick() {
    setInputState('focus')
  }
  function handleInputChange(value: string) {
    setValue(value)
  }
  function handleInputBlur() {
    if (value === '') {
      setInputState('normal')
      return
    }
    
    if (!validateAuth(type, value)) {
      setInputState('error')
      return
    }
    
    setInputState('focus')
  }



  return {
    value,
    inputState,
    handleInputClick,
    handleInputChange,
    handleInputBlur
  }
}

export default useAuthInput