import { ADD_TODO, DELETE_TODO, MARK_TODO } from './actionTypes';

export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: {
      title
    }
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  };
}

export function markTodo(id) {
  return {
    type: MARK_TODO,
    payload: {
      id
    }
  };
}