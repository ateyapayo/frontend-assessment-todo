import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import TasksList from "./components/TasksList";

const App = () => {
  return (
    <MantineProvider>
      <TasksList />
    </MantineProvider>
  );
};

export default App;
