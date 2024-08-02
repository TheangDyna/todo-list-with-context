import React from "react";
import TodoItem from "./TodoItem";
import { todoData } from "../constants";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  // todos: Todo[];
  // toggleComplete: (id: string) => void;
  // deleteTodo: (id: string) => void;
  // editTodo: (id: string, text: string) => void;
}

const TodoList: React.FC<TodoListProps> = (
  {
    // todos,
    // toggleComplete,
    // deleteTodo,
    // editTodo,
  }
) => {
  return (
    <ul className="list-none p-0">
      {todoData.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          // toggleComplete={toggleComplete}
          // deleteTodo={deleteTodo}
          // editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
