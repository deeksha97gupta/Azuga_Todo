import React from "react";
import "./Todo.css";
import { todoType } from "./TodoList"

interface todoProps {
    todo: todoType,
    remove(indexValue: number): void;
    updateToggle(indexValue: number): void;
}
const Todo = ({ todo, remove, updateToggle }: todoProps) => {

  let result;
    result = (
      <div className="Todo">
        <li
          onClick={() => updateToggle(todo.id)}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.task}
        </li>
        <button onClick={() => remove(todo.id)}>Delete</button>
      </div>
    );
  return result;
}

export default Todo;
