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

export const Head = () => (
  <>
    <title>Todo App</title>
    <meta property="og:title" content="Todo App" />
    <meta
      property="og:image"
      content="https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/todo_app_KPFn8Kj0O.webp?updatedAt=1678863890733"
    />
  </>
);
