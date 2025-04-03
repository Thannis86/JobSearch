"use client";

import AddJobForm from "@/components/AddJobForm/AddJobForm";
import AllJobsCard from "@/components/AllJobsCard/AllJobsCard";

export default function HomePage() {
  return (
    <div>
      <AddJobForm />
      <AllJobsCard />
    </div>
  );
}
