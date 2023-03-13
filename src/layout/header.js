import React, { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

import "../scss/layout/header.scss";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <header className="todo-app__header">
      <div className="container">
        <div className="todo-app__header-title">
          <h1>T O D O</h1>
          <button onClick={toggleTheme}>
            {darkTheme ? (
              <img
                src="https://ik.imagekit.io/csdesigner/todo_app/icon-sun_71h0PZdvYg.svg?updatedAt=1678693698856"
                alt="icon-sun"
              />
            ) : (
              <img
                src="https://ik.imagekit.io/csdesigner/todo_app/icon-moon_x6usD35ni.svg?updatedAt=1678693698719"
                alt="icon-moon"
              />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
