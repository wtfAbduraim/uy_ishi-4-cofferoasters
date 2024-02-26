import React from "react";
import "./Header.scss";
import HeaderLogo from "../Img/HeaderLogo.svg";
import { NavLink } from "react-router-dom";
import Language from "../Localization/Localization";
import { Context as LocalizationCon } from "../Context/Localization";
import { Context as ThemeCon } from "../Context/Theme";

function Header() {
  const { lang, setLang } = React.useContext(LocalizationCon);
  const { theme, setTheme } = React.useContext(ThemeCon);
  return (
    <>
      <header className={`header header--${theme}`}>
        <div className="container">
          <NavLink className="header__link" to="">
            <img
              className="header__logo"
              src={HeaderLogo}
              alt="Header Logo"
              width="235"
              height="25"
            />
          </NavLink>

          <select
            className="header__select"
            value={lang}
            onChange={(evt) => setLang(evt.target.value)}
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>

          <select
            className="header__select"
            value={theme}
            onChange={(evt) => setTheme(evt.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink className="nav__link" to="Home">
                  {Language[lang].header.navLink1}
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink className="nav__link" to="About">
                  {Language[lang].header.navLink2}
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink className="nav__link" to="Create">
                  {Language[lang].header.navLink3}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
