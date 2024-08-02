import React, { useState } from "react";
import StatusButton from "./StatusButton";

interface Todo {
  title: string;
  level: "low" | "medium" | "high";
  status: "todo" | "doing" | "done";
  description: string;
}

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [status, setStatus] = useState<"todo" | "doing" | "done">("todo");
  const levelStyles = {
    low: "border-l-4 border-green-500",
    medium: "border-l-4 border-yellow-500",
    high: "border-l-4 border-red-500",
  };

  return (
    <li
      className={`flex items-center justify-between mb-2 p-2 shadow-md rounded cursor-pointer hover:bg-default-400/20 ${
        levelStyles[todo.level]
      }`}
      tabIndex={0}
    >
      <span className="text-default-900">{todo.title}</span>

      <StatusButton
        status={status}
        onStatusChange={(status) => setStatus(status)}
      />
    </li>
  );
};

export default TodoItem;
