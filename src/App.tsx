import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { TodosProvider } from "./contexts/TodosContext";

const App: React.FC = () => {
  return (
    // step3: wrap provider with app
    <TodosProvider>
      <main className="w-full">
        <div className="flex flex-col h-screen max-w-[1200px] mx-auto">
          <Header />
          <Body />
          <Footer />
        </div>
      </main>
    </TodosProvider>
  );
};

export default App;
