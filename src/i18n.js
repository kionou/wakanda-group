import { createI18n } from 'vue-i18n'
import fr from './locales/french.json'
import en from './locales/english.json'


export default createI18n({
  locale: "fr",
  fallbackLocale: "fr",
  messages:{
      fr:fr,
      en:en
  }
})
