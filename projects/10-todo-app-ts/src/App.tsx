import React, { useState } from "react";
import { Todos } from "./components/Todos";

const mockTodos = [
  {
    id: "1",
    title: "Todo 1",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    completed: true,
  },
];

const App: React.FC = () => {
  const [todos] = useState(mockTodos);
  return (
    <div className="todoapp">
      <Todos todos={todos} />;
    </div>
  );
};

export default App;
