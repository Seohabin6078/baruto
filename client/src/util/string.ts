const regex = {
  emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  nicknameRegex: /^[가-힣|a-z|A-Z]+$/
}

export const validateAuth = (type: 'email' | 'password' | 'nickname', value: string) => {
  if (type === 'email') {
    return validateEmail(value)
  }
  if (type === 'password') {
    return validatePassword(value)
  }
  if (type === 'nickname') {
    return validateNickName(value)
  }

  return false
}

// - 이메일은 이메일 형식
const validateEmail = (value: string) => {
  return regex.emailRegex.test(value)
}

// - 패스워드는 8~20 자리의 영문자와 숫자
const validatePassword = (value: string) => {
  const len = value.length
  if (len < 8 || len > 20) return false

  for (let i = 0; i < len; i++) {
    const char = value[i]


    if (!isEnglish(char) || !isNumber(char)) continue

    return false
  }

  return true
}
// 숫자
const isNumber = (char: string) => {
  const numChar = Number(char)

  return !Number.isNaN(numChar)
}
// 영어 문자열
const isEnglish = (char: string) => {
  return isUpperCase(char) || isLowerCase(char)
}
const isUpperCase = (char: string) => {
  const charCode = char.charCodeAt(0)
  return charCode >= 65 && charCode <= 90
}
const isLowerCase = (char: string) => {
  const charCode = char.charCodeAt(0)
  return charCode >= 97 && charCode <= 122
}

// - 닉네임 2~6자리의 한글, 영어만
const validateNickName = (value: string) => {
  const len = value.length
  if (len < 2 || len > 6) return false
  return regex.nicknameRegex.test(value)
}