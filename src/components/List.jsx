import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, markTodo } from '../state/todos/actions';
import { todosSelector } from '../state/todos/selectors';

export function List() {
  const todos = useSelector(todosSelector)
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(deleteTodo(id));
  }

  const handleDone = (id) => {
    dispatch(markTodo(id));
  }

  return (
    <div id="list">
      <ul>
        {todos.map((todo) => {
          return (
            <li key={`${todo.title}-${todo.id}`}>
              <h1>
                {todo.title} {todo.completed && "✅"}
              </h1>
              <div>
                <button className="remove-button" onClick={() => {handleRemove(todo.id)}}>
                  Remove ✘
                </button>
                <button className="mark-as-done-button" onClick={() => {handleDone(todo.id)}}>
                  Done ✔
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
