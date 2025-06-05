import { Card } from "@radix-ui/themes";
import { useState } from "react";
import * as Switch from "@radix-ui/react-switch";
import { Text } from "@radix-ui/themes";

import "./Switch.css";

export default function RejectedSwitch() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Card id="Switch">
      <Switch.Root
        className="SwitchRoot"
        checked={isChecked}
        onCheckedChange={setIsChecked}
      >
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
      <Text>Show Rejected</Text>
      {/* {isChecked && <AddJobForm />} */}
    </Card>
  );
}
