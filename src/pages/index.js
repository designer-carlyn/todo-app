import React, { useState } from "react";
import { ThemeContext } from "../context/theme-context";

import Header from "../layout/header";
import TodoContainer from "../layout/todo-container";

import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/700.css";
import "../scss/layout/index.scss";
import "../scss/helpers/theme-style.scss";

const IndexPage = () => {
  const [darkTheme, setDarkTheme] = useState(ThemeContext);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <main className={`todo-app ${darkTheme ? "dark-theme" : "light-theme"}`}>
        <Header></Header>
        <TodoContainer></TodoContainer>
      </main>
    </ThemeContext.Provider>
  );
};

export default IndexPage;

export const Head = () => <title>ToDo App</title>;
