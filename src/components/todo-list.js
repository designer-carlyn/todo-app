import React, { useContext, useState } from "react";
import {
  CreateTodoContext,
  DispatchTodoContext,
} from "../context/create-todo-context";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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

  const reorder = (todoList, startIndex, endIndex) => {
    const updatedTodo = Array.from(todoList);
    const [removed] = updatedTodo.splice(startIndex, 1);
    updatedTodo.splice(endIndex, 0, removed);

    return updatedTodo;
  };

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

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      todoList,
      result.source.index,
      result.destination.index
    );

    dispatch({
      type: "reOrder",
      todo: items,
    });
  }

  const getItemStyle = (draggableStyle, isDragging) => ({
    // change background colour if dragging
    backgroundColor: isDragging ? "rgba(0,0,0,0.1)" : "",
    borderBottom: isDragging ? "none" : "",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <>
      {todoList.length === 0 ? (
        <div className="todo-list-placeholder">
          <h2>No Data Found</h2>
        </div>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                className="todo-app-list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {filteredTodoList.map((todo, index) => {
                  return (
                    <Draggable
                      key={todo.id}
                      draggableId={todo.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          className="todo-item"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          style={getItemStyle(
                            provided.draggableProps.style,
                            snapshot.isDragging
                          )}
                        >
                          <label className="todo-check">
                            <input
                              type="checkbox"
                              checked={todo.completed}
                              onChange={(event) =>
                                onChangeCompleted(event, todo)
                              }
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
                            onClick={() => onDeleteTodo(todo.id)}
                          >
                            <img
                              src="https://ik.imagekit.io/csdesigner/todo_app/icon-cross_STxqc-bBC.svg?updatedAt=1678693698788"
                              alt="delete-icon"
                            />
                          </button>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}

      <div className="todo-list-setting">
        <div className="todo-count">
          <small>{todoListCount} Iteme(s) Left</small>
        </div>
        <div className="todo-filter">
          <button
            className={filterValue === "All" ? "active" : ""}
            onClick={() => setFilterValue("All")}
          >
            All
          </button>
          <button
            className={filterValue === "Active" ? "active" : ""}
            onClick={() => setFilterValue("Active")}
          >
            Active
          </button>
          <button
            className={filterValue === "Completed" ? "active" : ""}
            onClick={() => setFilterValue("Completed")}
          >
            Completed
          </button>
        </div>
        <div className="todo-clear">
          <button onClick={onClearCompleted}>Clear Completed</button>
        </div>
      </div>
      <div className="todo-list-footer">
        <p>Drag and drop to reorder list</p>
      </div>
    </>
  );
};

export default TodoList;
