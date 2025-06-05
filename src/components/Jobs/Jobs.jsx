"use client";

import AddJobSwitch from "@/components/Jobs/AddJobForm/AddJobSwitch";
import AllJobsCard from "@/components/Jobs/AllJobsCard/AllJobsCard";
import { Card } from "@radix-ui/themes";

export default function JobsCard() {
  return (
    <div>
      <Card>
        <AddJobSwitch />
        <AllJobsCard />
      </Card>
    </div>
  );
}
