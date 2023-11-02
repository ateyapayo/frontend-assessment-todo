import { useState, useEffect } from "react";

import { getTodos } from "../api/todos.ts";
import Todo from "../Interfaces.ts";

import TableContainer from "./Table.tsx";

const TodosList: React.FC = () => {
  const [todosList, setTodosList] = useState<Todo[]>([]);

  const fetchAllTodos = async () => {
    const todo = await getTodos();
    setTodosList(todo);
  };

  useEffect(() => {
    fetchAllTodos();
  }, []);

  return (
    <>
      <TableContainer todos={todosList} />
    </>
  );
};

export default TodosList;
