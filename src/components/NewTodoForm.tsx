import React, { useState } from "react";
import "./newTodoForm.css";
import { todoType } from "./TodoList"

interface formProps {
    createData(data: todoType): void;
}
const NewTodoForm = ({ createData }: formProps) => {
  const [userInput, setUserInput] = useState<string>("");

  const inputHandler = (enteredText: string) => {
    setUserInput(enteredText);
   };

  const handleSubmit = () => {
    const data = {
        id: Math.floor(Math.random() * 100),
        task: userInput,
        completed: false
    }
    createData(data);
    setUserInput("");
  };

  return (
    <form className="NewTodoForm" onSubmit={() => handleSubmit}>
      <label >New todo</label>
      <input
        value={userInput}
        onChange={(evt) => inputHandler(evt.target.value)}
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
