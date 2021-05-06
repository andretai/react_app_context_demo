import React from 'react';
import { ThemeConsumer, ThemeProvider } from './contexts/ThemeContext';
import { LanguageConsumer, LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';

const App = () => {
  return (
    <ThemeProvider>
      <ThemeConsumer>
        {themeContext => (
          <LanguageProvider>
            <LanguageConsumer>
              {languageContext => (
                <Header 
                  lang={languageContext.currentLang} changeLang={languageContext.changeLang}
                  dict={languageContext.currentDict}
                  theme={themeContext.currentTheme} changeTheme={themeContext.changeTheme}
                  mode={themeContext.currentMode}
                />
              )}
            </LanguageConsumer>      
          </LanguageProvider>
        )}
      </ThemeConsumer>
    </ThemeProvider>
  );
}

export default App;
