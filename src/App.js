import React from "react";
import Markup from "./markup/markup";

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// React Modal Video
import "react-modal-video/css/modal-video.min.css";

// Fonts
import "./vendor/line-awesome/css/line-awesome.min.css";
import "./vendor/font-awesome/css/font-awesome.min.css";
import "./vendor/flaticon/flaticon.css";
import "./vendor/themify/themify-icons.css";

// StyleSheet
import "./App.scss";

import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { Suspense } from "react";

import translationEN from "./locales/en/translation.json";
import translationAR from "./locales/ar/translation.json";

function App() {
  const fallbackLng = ["en"];
  const availableLanguages = ["en", "ar"];

  const resources = {
    en: {
      translation: translationEN,
    },
    ar: {
      translation: translationAR,
    },
  };

  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng,
      debug: false,
      whitelist: availableLanguages,
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ["path"],
        lookupFromPathIndex: 0,
      },
    });
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="page-wraper">
          <Markup i18n={i18n} />
        </div>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;
