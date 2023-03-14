import React, { useContext } from "react";
import {
  CreateTodoContext,
  DispatchTodoContext,
} from "../context/create-todo-context";

import "../scss/components/todo-list.scss";

const TodoList = () => {
  const todoList = useContext(CreateTodoContext);
  const dispatch = useContext(DispatchTodoContext);

  const onChangeCompleted = (event, todo) => {
    let isCheck = event.target.checked;
    dispatch({
      type: "completed",
      todo: {
        ...todo,
        completed: isCheck,
      },
    });
  };

  return (
    <div className="todo-app-list">
      {todoList.map((todo) => {
        return (
          <div className="todo-item" key={todo.id}>
            <label className="todo-check">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(event) => onChangeCompleted(event, todo)}
              />
              {todo.completed === true ? (
                <s>{todo.title}</s>
              ) : (
                <span>{todo.title}</span>
              )}
              <span className="checkmark"></span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
