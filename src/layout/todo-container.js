import React, { useReducer } from "react";
import {
  CreateTodoContext,
  DispatchTodoContext,
} from "../context/create-todo-context";
// import initialValue from "../content/todo-iniatal-value.json";

import CreateTodo from "../components/create-todo";
import TodoList from "../components/todo-list";

import "../scss/layout/todo-container.scss";

const TodoContainer = () => {
  const [newTodo, dispatch] = useReducer(todoReducer, []);

  return (
    <div className="todo-app__container">
      <div className="container">
        <div className="todo-app__container-holder">
          <CreateTodoContext.Provider value={newTodo}>
            <DispatchTodoContext.Provider value={dispatch}>
              <CreateTodo />
              <TodoList />
            </DispatchTodoContext.Provider>
          </CreateTodoContext.Provider>
        </div>
      </div>
    </div>
  );
};

function todoReducer(newTodo, action) {
  switch (action.type) {
    case "addTodo": {
      return [
        ...newTodo,
        {
          id: action.id,
          title: action.title,
          completed: false,
        },
      ];
    }
    case "completed": {
      return newTodo.map((todo) => {
        if (todo.id === action.todo.id) {
          return action.todo;
        } else {
          return todo;
        }
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default TodoContainer;
