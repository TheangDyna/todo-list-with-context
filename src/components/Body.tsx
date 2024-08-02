import React from "react";
import TodoList from "./TodoList";
import FlexibleArea from "./FlexibleArea";

const Body: React.FC = () => {
  return (
    <div className="flex-1 overflow-auto px-5">
      <div className="grid grid-cols-2 gap-5 h-full">
        <div className="overflow-auto border border-gray-300 rounded-xl p-5">
          <FlexibleArea view="create" />
        </div>
        <div className="overflow-auto border border-gray-300 rounded-xl p-5">
          <div className="h-full overflow-auto">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
