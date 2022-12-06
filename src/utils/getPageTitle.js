import defaultSettings from '@/settings'
import enLocale from '@/lang/en'
import zhLocale from '@/lang/zh'
import getLanguage from './getLanguage'

const title = defaultSettings.title || 'Vue Admin Template'

export default function getPageTitle(pageTitle) {
  let lang = getLanguage()
  if(!pageTitle){
    return `${title}`
  }
  if(lang==='zh'){
    return `${title} - ${zhLocale.route[pageTitle]}`
  }else{
    return `${title} - ${enLocale.route[pageTitle]}`
  }
}
