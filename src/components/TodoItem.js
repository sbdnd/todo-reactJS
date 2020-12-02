import React from "react";

const TodoItem = ({ todo, deleteTodo, toogleTodo }) => {
  return (
    <li
      onClick={toogleTodo}
      className="list-group-item d-flex flex-row justify-content-between align-items-center list-group"
    >
      <span>{todo.name}</span>
      <span>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => {}} //onchange vide pour retirer l'erreur en console
          className="mx-3"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteTodo();
          }}
          className="btn btn-sm btn-danger"
        >
          delete
        </button>
      </span>
    </li>
  );
};

export default TodoItem;
