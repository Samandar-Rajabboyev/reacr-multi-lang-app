import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
// import App from './App';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      },
      fr: {
        translation: {
          "Welcome to React": "Bienvenue a React at react-i18next"
        }
      }
    },
    lng: "en", 
    fallbackLng: "en",
    detection: {
      order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
      cash: ['cookie']
    }
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
