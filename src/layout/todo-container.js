import React, { useState } from "react";
import { CreateTodoContext } from "../context/create-todo-context";
import initialValue from "../content/todo-iniatal-value.json";

import CreateTodo from "../components/create-todo";

import "../scss/layout/todo-container.scss";

const TodoContainer = () => {
  const [newTodo, setNewTodo] = useState(initialValue);

  return (
    <div className="todo-app__container">
      <div className="container">
        <div className="todo-app__container-holder">
          <CreateTodoContext.Provider value={[newTodo, setNewTodo]}>
            <CreateTodo />
          </CreateTodoContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
