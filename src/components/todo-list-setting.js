import React, { useContext } from "react";
import {
  CreateTodoContext,
  DispatchTodoContext,
} from "../context/create-todo-context";

import "../scss/components/todo-list-setting.scss";

const TodoListSetting = () => {
  const todoList = useContext(CreateTodoContext);
  const dispatch = useContext(DispatchTodoContext);

  const todoListCount = todoList.filter(
    (todo) => todo.completed === false
  ).length;

  const onClearCompleted = () => {
    dispatch({
      type: "clearCompleted",
      completed: false,
    });
  };

  return (
    <div className="todo-list-setting">
      <div className="todo-count">
        <small>{todoListCount} Iteme(s) Left</small>
      </div>
      <div className="todo-filter">
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>
      </div>
      <div className="todo-clear">
        <button type="button" onClick={onClearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoListSetting;
