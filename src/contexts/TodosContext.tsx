// step1: create context

import { createContext, ReactNode, useContext, useState } from "react";

interface TodosProviderProps {
  children: ReactNode;
}

export const TodosContext = createContext({});

// step2: create provider context
export const TodosProvider: React.FC<TodosProviderProps> = ({ children }) => {
  const [example, setExample] = useState("hello");

  return (
    <TodosContext.Provider value={{ example, setExample }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (context === undefined)
    throw new Error("TodosContext was used outside the TodosProvider");
  return context;
};
