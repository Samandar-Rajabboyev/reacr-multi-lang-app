import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
// import App from './App';

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ['htmlTag', 'cookie', 'localStorage',  'subdomain', 'path'],
      cashes: ['cookie']
    },
    backend: {
      loadPath: 'assets/locales/{{lang}}/translation.json'
    },
    react: {useSuspense: false}
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('welcome_to_react')}</h2> 
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
