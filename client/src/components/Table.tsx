import React from "react";
import { Table, Container } from "@mantine/core";
import { removeTodo } from "../api/todos";
import { Todo } from "../Interfaces";

type TableContainerProps = {
  todos: Todo[];
  restart: React.Dispatch<React.SetStateAction<boolean>>;
};

const tableStyles = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  minWidth: "600px",
};

const TableContainer: React.FC<TableContainerProps> = ({ todos, restart }) => {
  const handleDelete = async (todo: Todo) => {
    try {
      await removeTodo(todo.id);
      restart(true);
    } catch (error) {
      console.error("Error removing packed item:", error);
    }
  };

  return (
    <Container>
      <Table highlightOnHover striped style={tableStyles}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th align="center">Todos</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {todos.map((todo) => (
            <Table.Tr key={todo.id} className="todo-container">
              <Table.Td
                style={{
                  textDecoration: todo.done ? "line-through" : "none",
                }}
              >
                {todo.title}
              </Table.Td>
              <Table.Td onClick={() => handleDelete(todo)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trash delete-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 7l16 0"></path>
                  <path d="M10 11l0 6"></path>
                  <path d="M14 11l0 6"></path>
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                </svg>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Container>
  );
};

export default TableContainer;
