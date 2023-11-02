import { useState, useEffect } from "react";

import { getTodos } from "../api/todos.ts";
import { Todo } from "../Interfaces.ts";

import TableContainer from "./Table.tsx";

type TodosListProps = {
  reload: boolean;
  restart: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodosList: React.FC<TodosListProps> = ({ reload, restart }) => {
  const [todosList, setTodosList] = useState<Todo[]>([]);

  const fetchAllTodos = async () => {
    const todos = await getTodos();
    setTodosList(todos);
  };

  useEffect(() => {
    fetchAllTodos();
    restart(false);
  }, [reload]);

  return (
    <>
      <TableContainer todos={todosList} restart={restart} />
    </>
  );
};

export default TodosList;
