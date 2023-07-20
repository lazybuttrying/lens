import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
let headers = { 'accept-language': 'en,ko;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en', 'ko']
let defaultLocale = 'en'
 
match(languages, locales, defaultLocale) 