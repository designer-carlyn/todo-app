import React from "react";

import "../scss/components/todo-list-setting.scss";

const TodoListSetting = () => {
  return (
    <div className="todo-list-setting">
      <div className="todo-count">
        <small>5 Times Left</small>
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
