import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import Shell from "./components/Shell";

const App = () => {
  return (
    <MantineProvider>
      <Shell />
    </MantineProvider>
  );
};

export default App;
