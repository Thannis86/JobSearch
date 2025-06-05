"use client";

import AddJobSwitch from "@/components/AddJobForm/AddJobSwitch";
import AllJobsCard from "@/components/AllJobsCard/AllJobsCard";

export default function HomePage() {
  return (
    <div>
      <AddJobSwitch />
      <AllJobsCard />
    </div>
  );
}
