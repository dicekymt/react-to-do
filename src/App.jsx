import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaaa", "bbbbbb"]);

  const [completeTodos, setCompleteTodos] = useState(["cccccc"]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  return (
    <>
      <div class="input-area">
        <input
          placeholder="write todo"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>add</button>
      </div>
      <div class="incomplete-area">
        <p class="title">incomplete todo</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} class="list-row">
                <li>{todo}</li>
                <button>complete</button>
                <button>delete</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div class="complete-area">
        <p class="title">complete todo</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} class="list-row">
                <li>{todo}</li>
                <button>undo</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div></div>
    </>
  );
};
