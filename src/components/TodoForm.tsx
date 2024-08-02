import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import { LevelOptions } from "../constants";

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input type="text" label="Title" size="sm" />
      <Select label="Select a level" size="sm">
        {LevelOptions.map((animal, index) => (
          <SelectItem key={index}>{animal.label}</SelectItem>
        ))}
      </Select>
      <Textarea label="Description" size="sm" />
      <Button color="secondary">Create</Button>
    </form>
  );
};

export default TodoForm;
