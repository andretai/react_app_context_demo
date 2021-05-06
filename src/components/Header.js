import React from 'react'

const Header = (props) => {
  
  const { lang, changeLang, dict, theme, changeTheme, mode } = props;
  
  return (
    <div style={mode.headerStyle}>
      {/* This button changes the language context, which also mutates the dictionary. */}
      <button
        onClick={() => lang === "en" ? changeLang("cn") : changeLang("en")}
      >{props.lang}</button>
      {/* This button changes the theme context, which also mutates the mode (light/dark). */}
      <button
        onClick={() => theme === "light" ? changeTheme("dark") : changeTheme("light")}
      >{props.theme}</button>
      <p>{dict.language}</p>
    </div>
  )
}

export default Header;
