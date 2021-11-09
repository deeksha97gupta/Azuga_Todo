import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

export interface todoType {
  id: number,
  task: string,
  completed: boolean
}

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "task 1", completed: false },
    { id: 3, task: "task 2", completed: true }
  ]);

  const create = (newTodo: todoType) => {
    setTodos(currentItems => [...currentItems, newTodo]);
  };

  const remove = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosList = todos.map(todo => (
    <Todo
      updateToggle={toggleComplete}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <div className="TodoList">
      <h1>
        Todo List <span>A simple React Todo List App</span>
      </h1>
      <ul>{todosList}</ul>
      <NewTodoForm createData={create} />
    </div>
  );
}

export default TodoList;
