import React, { useState } from 'react'

export type ButtonState = 'accessible' | 'disabled' | 'loading'
export type ButtonSize = 'normal' | 'large'


const useAuthButton = (
  string: string,
  email: string,
  password: string
) => {
  const [state, setState] = useState<ButtonState>('disabled')
  const [size, setSize] = useState<ButtonSize>('normal')

  return {
    state,
    setState,
    size,
    string,
  }
}

export default useAuthButton