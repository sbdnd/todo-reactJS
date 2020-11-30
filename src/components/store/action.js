// Actions type
export const ADD_TODO = "add todo";
export const DELELTE_TODO = "delete todo";
export const SET_FILTER = "set filter";
export const TOOGLE_TODO = "toogle todo";

// constantes pour les filtres
export const visibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_DONE: "SHOW_DONE",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

// 4 actions creators
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  };
};

export const deleteTodo = (index) => {
  return {
    type: DELELTE_TODO,
    index,
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter,
  };
};

export const toogleTodo = (index) => {
  return {
    type: TOOGLE_TODO,
    index,
  };
};
