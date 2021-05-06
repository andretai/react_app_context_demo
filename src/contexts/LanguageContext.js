import React, { createContext, useState } from 'react';

const dict = {
  "en": {
    language: "english"
  },
  "cn": {
    language: "中文"
  }
}

// 1. Create context for language.
const LanguageContext = createContext(true);

// 2. Create provider for LanguageContext.
const LanguageProvider = ({ children }) => {

  const [currentLang, setCurrentLang] = useState("en");
  const [currentDict, setCurrentDict] = useState(dict["en"]);

  const changeLang = lang => {
    setCurrentLang(lang);
    setCurrentDict(dict[lang]);
  };

  return (
    <LanguageContext.Provider value={{
      currentLang: currentLang,
      currentDict: currentDict,
      changeLang: changeLang
    }}>
      {children}
    </LanguageContext.Provider>
  );

}

// 3. Create consumer of LanguageContext.
const consumer = LanguageContext.Consumer;

export { LanguageProvider, consumer as LanguageConsumer, LanguageContext };
