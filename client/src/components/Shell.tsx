import { useHeadroom } from "@mantine/hooks";
import { AppShell, Group } from "@mantine/core";

import { useState } from "react";

import TodosList from "./TodosList";
import InputContainer from "./Input";

const Shell = () => {
  const [trigger, setTrigger] = useState<boolean>(false);

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
        <div className="input">
          <InputContainer reload={setTrigger} />
        </div>
        <TodosList restart={setTrigger} reload={trigger} />
      </AppShell.Main>
    </AppShell>
  );
};

export default Shell;
