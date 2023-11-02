import { Table, Container } from "@mantine/core";

import Todo from "../Interfaces";

type TableContainerProps = {
  todos: Todo[];
};

const tableStyles = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  minWidth: "600px",
};

const TableContainer: React.FC<TableContainerProps> = ({ todos }) => {
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
            <Table.Tr key={todo.id}>
              <Table.Td
                style={{ textDecoration: todo.done ? "line-through" : "none" }}
              >
                {todo.title}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Container>
  );
};

export default TableContainer;
