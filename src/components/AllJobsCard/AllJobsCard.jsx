"use client";

import { Button, Card, Table, Text } from "@radix-ui/themes";
import Link from "next/link";
import "./AllJobsCard.css";
import { useEffect, useState } from "react";
import FetchJobs from "./AllJobsFetch";

export default function AllJobsCard() {
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState();
  const brokenJobs = jobs;

  console.log(jobs);
  useEffect(() => {
    const getJobs = async () => {
      const jobData = await FetchJobs();
      setJobs(jobData);
    };

    getJobs();
  }, []);

  const filteredJobs = (brokenJobs || []).filter((job) =>
    job.job_title?.toLowerCase().includes(search.toLowerCase())
  );

  function isValidURL(str) {
    try {
      new URL(str);
      return true;
    } catch (_) {
      return false;
    }
  }

  return (
    <Card>
      <input
        type="text"
        placeholder="Search Job..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell className="AllJobsCardHeader">
              Company
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="AllJobsCardHeader">
              Job Title
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="AllJobsCardHeader">
              Salary
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="AllJobsCardHeader">
              Application Status
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Header></Table.Header>
        <Table.Body>
          {filteredJobs.map((job) => (
            <Table.Row key={job.id}>
              <Table.Cell>{job.company}</Table.Cell>
              <Table.Cell>
                {isValidURL(job.link) ? (
                  <Button asChild>
                    <Link href={job.link} className="JobLink">
                      {job.job_title}
                    </Link>
                  </Button>
                ) : (
                  <Text>{job.job_title}</Text>
                )}
              </Table.Cell>
              <Table.Cell>
                £
                {Intl.NumberFormat("en-UK", {
                  maximumFractionDigits: 2,
                }).format(job.salary)}
              </Table.Cell>
              <Table.Cell>
                <form>
                  <select name="stage" onchange="this.form.submit()">
                    <option value={job.stage}>{job.stage}</option>
                    <option value="Applied">Applied</option>
                    <option value="Callback">Callback</option>
                    <option value="Interview">Interview</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                  <input type="hidden" name="id" value={job.id}></input>
                </form>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
}
