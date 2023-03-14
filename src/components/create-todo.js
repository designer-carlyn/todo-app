import React, { useState, useContext } from "react";
import { DispatchTodoContext } from "../context/create-todo-context";
import { uid } from "uid";

const CreateTodo = () => {
  const dispatch = useContext(DispatchTodoContext);

  const [newTodo, setNewTodo] = useState("");

  function createTodo(event) {
    event.preventDefault();
    if (newTodo !== "") {
      dispatch({
        type: "addTodo",
        id: uid(),
        title: newTodo,
      });
      setNewTodo("");
      document.getElementById("input-new-todo").value = "";
    } else {
      alert(Error("Please fill out the form"));
    }
  }

  const handleInputChange = (event) => {
    let value = event.target.value;
    setNewTodo(value);
  };

  return (
    <div>
      <form className="create-todo-form" onSubmit={createTodo}>
        <button
          type="button"
          aria-label="save-todo"
          onClick={createTodo}
        ></button>
        <input
          id="input-new-todo"
          onChange={handleInputChange}
          type="text"
          placeholder="Create a new todo..."
        />
      </form>
    </div>
  );
};

export default CreateTodo;
