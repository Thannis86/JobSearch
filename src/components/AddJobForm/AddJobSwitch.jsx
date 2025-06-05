import { Card } from "@radix-ui/themes";
import AddJobForm from "./AddJobForm";
import { useState } from "react";
import * as Switch from "@radix-ui/react-switch";

import "./Switch.css";

export default function AddJobSwitch() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Card>
      <Switch.Root
        className="SwitchRoot"
        checked={isChecked}
        onCheckedChange={setIsChecked}
      >
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
      {isChecked && <AddJobForm />}
    </Card>
  );
}
