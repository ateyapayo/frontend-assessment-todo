import { useHeadroom } from "@mantine/hooks";
import { AppShell, Group } from "@mantine/core";

import TodosList from "./TodosList";

const Shell = () => {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: false }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          Todo APP!
        </Group>
      </AppShell.Header>
      <AppShell.Main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <TodosList />
      </AppShell.Main>
    </AppShell>
  );
};

export default Shell;
