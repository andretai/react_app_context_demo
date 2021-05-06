import React, { createContext, useState } from 'react';

const themes = {
  "light": {
    headerStyle: {
      padding: '20px',
      backgroundColor: '#dddddd',
      color: '#000000'
    }
  },
  "dark": {
    headerStyle: {
      padding: '20px',
      backgroundColor: '#333333',
      color: '#ffffff'
    }
  }
}

// 1. Create context for theme.
const ThemeContext = createContext(true);

// 2. Create provider for theme.
const ThemeProvider = ({ children }) => {

  const [currentTheme, setCurrentTheme] = useState("light");
  const [currentMode, setCurrentMode] = useState(themes["light"]);

  const changeTheme = theme => {
    setCurrentTheme(theme);
    setCurrentMode(themes[theme]);  
  };

  return (
    <ThemeContext.Provider value={{
      currentTheme: currentTheme,
      currentMode: currentMode,
      changeTheme: changeTheme
    }}>
      {children}      
    </ThemeContext.Provider>
  );

}

// 3. Create consumer of ThemeContext.
const consumer = ThemeContext.Consumer;

export { ThemeProvider, consumer as ThemeConsumer, ThemeContext };