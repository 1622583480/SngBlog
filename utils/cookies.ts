import keys from "../src/constant/key"
import Cookies from 'js-cookie'

export const getLanguage = () => Cookies.get(keys.languageKey)
export const setLanguage = (language: string) => Cookies.set(keys.languageKey, language)
