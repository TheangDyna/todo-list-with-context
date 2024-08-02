import React from "react";
import TodoForm from "./TodoForm";
import { View } from "../types";
import { Button } from "@nextui-org/react";

interface FlexibleAreaProps {
  view: View;
}

const FlexibleArea: React.FC<FlexibleAreaProps> = ({ view }) => {
  const isQuote = view === "quote";
  const isCreate = view === "create";
  const isDetial = view === "detail";
  const isUpdate = view === "update";

  return (
    <div className="h-full overflow-auto">
      {isQuote && (
        <span className="text-default-400 font-bold text-2xl">
          Do Your Best!!!
        </span>
      )}
      {isCreate && <TodoForm />}
      {isDetial && "detail"}
      {isUpdate && "update"}
    </div>
  );
};

export default FlexibleArea;
