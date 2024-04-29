import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import laungageDetector from "i18next-browser-languagedetector";
import ruTranslation from '../public/locales/ru.json';
import enTranslation from '../public/locales/en.json';
import uzTranslation from '../public/locales/uz.json';

i18n
    .use(Backend)
    //Определение языка
    .use(laungageDetector)
    //Connect
    .use(initReactI18next)

    .init({
        fallbackLng: 'en',
        lng: 'en',
        debug: true,
        resources: {
            ru: { translation: ruTranslation },
            uz: { translation: uzTranslation },
            en: { translation: enTranslation },
        }

    })
export default i18n;
