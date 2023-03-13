import React, { useContext } from "react";
import { CreateTodoContext } from "../context/create-todo-context";

const CreateTodo = () => {
  const { todoList, setTodoList } = useContext(CreateTodoContext);

  console.log(todoList);

  const createTodo = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    let value = event.target.value;
    console.log(value);
  };

  return (
    <div>
      {/* {todoList.map((item, index) => {
        return <p key={index}>{item.title}</p>;
      })} */}
      <form className="create-todo-form">
        <button
          onClick={createTodo}
          type="button"
          aria-label="save-todo"
        ></button>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Create a new todo..."
        />
      </form>
    </div>
  );
};

export default CreateTodo;
