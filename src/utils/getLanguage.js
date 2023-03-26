import Cookies from "js-cookie"

export default function getLanguage() {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage
  // const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  // console.log('language', language);
  // console.log('messages', messages)
  // const locales = Object.keys(messages)
  // console.log('locales', locales)
  // for (const locale of locales) {
  //   if (language.indexOf(locale) > -1) {
  //     return locale
  //   }
  // }
  return 'zh'
}