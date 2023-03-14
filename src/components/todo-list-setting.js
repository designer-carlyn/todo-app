import React, { useContext } from "react";
import { CreateTodoContext } from "../context/create-todo-context";

import "../scss/components/todo-list-setting.scss";

const TodoListSetting = () => {
  const todoList = useContext(CreateTodoContext);

  const todoListCount = todoList.filter(
    (todo) => todo.completed === false
  ).length;

  return (
    <div className="todo-list-setting">
      <div className="todo-count">
        <small>{todoListCount} Iteme(s) Left</small>
      </div>
      <div className="todo-filter">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div className="todo-clear">
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoListSetting;
