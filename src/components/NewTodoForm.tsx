import React, { useReducer } from "react";
import "./newTodoForm.css";
import { todoType } from "./TodoList"


interface formProps {
    createTodo(indexValue: todoType): void;
}
function NewTodoForm({ createTodo }: formProps) {
  const [userInput, setUserInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      task: ""
    }
  );

  const handleChange = (evt: any) => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt:any) => {
    evt.preventDefault();
    const newTodo = { id: Math.floor(Math.random() * 100), task: userInput.task, completed: false };
    createTodo(newTodo);
    setUserInput({ task: "" });
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New todo</label>
      <input
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
      />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
