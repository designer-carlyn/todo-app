import React, { useContext, useState } from "react";
import {
  CreateTodoContext,
  DispatchTodoContext,
} from "../context/create-todo-context";

import "../scss/components/todo-list.scss";

const TodoList = () => {
  const todoList = useContext(CreateTodoContext);
  const dispatch = useContext(DispatchTodoContext);
  const [filterValue, setFilterValue] = useState("All");

  const todoListCount = todoList.filter(
    (todo) => todo.completed === false
  ).length;

  let filteredTodoList = todoList.filter((todo) => {
    if (filterValue === "Completed") {
      return todo.completed === true;
    } else if (filterValue === "Active") {
      return todo.completed === false;
    } else {
      return todo;
    }
  });

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

  const onDeleteTodo = (id) => {
    dispatch({
      type: "deleteTodo",
      id: id,
    });
  };

  const onClearCompleted = () => {
    dispatch({
      type: "clearCompleted",
      completed: false,
    });
  };

  return (
    <>
      <div className="todo-app-list">
        {filteredTodoList.map((todo) => {
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
              <button
                className="todo-delete"
                type="button"
                aria-label="delete-todo"
                onClick={() => onDeleteTodo(todo.id)}
              >
                <img
                  src="https://ik.imagekit.io/csdesigner/todo_app/icon-cross_STxqc-bBC.svg?updatedAt=1678693698788"
                  alt="delete-icon"
                />
              </button>
            </div>
          );
        })}
      </div>
      <div className="todo-list-setting">
        <div className="todo-count">
          <small>{todoListCount} Iteme(s) Left</small>
        </div>
        <div className="todo-filter">
          <button
            className={filterValue === "All" ? "active" : ""}
            type="button"
            onClick={() => setFilterValue("All")}
          >
            All
          </button>
          <button
            className={filterValue === "Active" ? "active" : ""}
            type="button"
            onClick={() => setFilterValue("Active")}
          >
            Active
          </button>
          <button
            className={filterValue === "Completed" ? "active" : ""}
            type="button"
            onClick={() => setFilterValue("Completed")}
          >
            Completed
          </button>
        </div>
        <div className="todo-clear">
          <button type="button" onClick={onClearCompleted}>
            Clear Completed
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
