// @ts-nocheck
import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { visibilityFilters, toogleTodo, deleteTodo } from "./store/action";

const TodoList = ({ todos, toogleTodo, deleteTodo }) => {
  return (
    <ul className="list-group">
      {todos &&
        todos.map((t, i) => (
          <TodoItem
            key={t.name}
            todo={t}
            deleteTodo={() => deleteTodo(i)}
            toogleTodo={() => toogleTodo(i)}
          />
        ))}
    </ul>
  );
};

export default connect(
  (state) => {
    const filter = state.filter;
    let todos;
    switch (filter) {
      case visibilityFilters.SHOW_DONE: {
        todos = state.todos.filter((t) => t.done);
        break;
      }
      case visibilityFilters.SHOW_ACTIVE: {
        todos = state.todos.filter((t) => !t.done);
        break;
      }
      default: {
        todos = state.todos;
      }
    }
    return {
      todos,
    };
  },
  {
    toogleTodo,
    deleteTodo,
  }
)(TodoList);
