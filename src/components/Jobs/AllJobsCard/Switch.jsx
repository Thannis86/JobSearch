import { Card } from "@radix-ui/themes";
import { useState } from "react";
import * as Switch from "@radix-ui/react-switch";
import { Text } from "@radix-ui/themes";

import "./Switch.css";

export default function RejectedSwitch({ show, showCheck }) {
  return (
    <Card id="Switch">
      <Switch.Root
        className="SwitchRoot"
        checked={showCheck}
        onCheckedChange={show}
      >
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
      <Text>Show Rejected</Text>
    </Card>
  );
}
