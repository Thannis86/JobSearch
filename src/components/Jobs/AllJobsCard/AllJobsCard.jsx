"use client";

import * as React from "react";
import { Button, Card, Table, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";
import "./AllJobsCard.css";
import { useEffect, useState } from "react";
import FetchJobs from "./AllJobsFetch";
import JobSelect from "./JobSelect";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import RejectedSwitch from "./Switch";

export default function AllJobsCard() {
  // Determines whether rejected jobs are shown or not. Function returns true or false based on ShowRejected being true/false and the job stage being 'Rejected'. RejectedSwitch adjusts true/false with show=setShowRejected and showCheck=showRejected

  const [showRejected, setShowRejected] = useState(false);
  function rejected(job) {
    if (!showRejected && job === "Rejected") {
      return false;
    } else {
      return true;
    }
  }

  //

  // Retrieves jobs from AllJobsFetch file

  const [jobs, setJobs] = useState();
  const brokenJobs = jobs;

  useEffect(() => {
    const getJobs = async () => {
      const jobData = await FetchJobs();
      setJobs(jobData);
    };
    getJobs();
  }, []);

  //

  // Filters jobs based on input

  const [search, setSearch] = useState("");

  const filteredJobs = (brokenJobs || []).filter((job) =>
    job.job_title?.toLowerCase().includes(search.toLowerCase())
  );

  //

  // Function to determine if input string is a valid URL or not

  function isValidURL(str) {
    try {
      new URL(str);
      return true;
    } catch (_) {
      return false;
    }
  }

  //

  return (
    <Card>
      <Table.Root>
        <Table.Header>
          <RejectedSwitch show={setShowRejected} showCheck={showRejected} />
        </Table.Header>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell className="AllJobsCardHeader">
              Company
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="AllJobsCardHeader">
              <TextField.Root
                type="text"
                placeholder="Job Title"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              >
                <TextField.Slot>
                  <MagnifyingGlassIcon />
                </TextField.Slot>
              </TextField.Root>
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="AllJobsCardHeader">
              Salary
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="AllJobsCardHeader">
              Application Status
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filteredJobs.map((job) =>
            rejected(job.stage) ? (
              <Table.Row key={job.id} className={job.stage}>
                <Table.Cell>{job.company}</Table.Cell>
                <Table.Cell>
                  {isValidURL(job.link) ? (
                    <Button asChild>
                      <Link href={job.link} className="JobLink">
                        {job.job_title}
                      </Link>
                    </Button>
                  ) : (
                    <Button className="UnusedButton">{job.job_title}</Button>
                  )}
                </Table.Cell>
                <Table.Cell>
                  £
                  {Intl.NumberFormat("en-UK", {
                    maximumFractionDigits: 2,
                  }).format(job.salary)}
                </Table.Cell>
                <Table.Cell>
                  <JobSelect job={job} />
                </Table.Cell>
              </Table.Row>
            ) : (
              false
            )
          )}
        </Table.Body>
      </Table.Root>
    </Card>
  );
}
