"use server";

import { db } from "@/utils/dbConnection";

export default async function FetchJobs() {
  const jobData = await db.query(`SELECT * from posts ORDER BY id`);
  const brokenJobs = await jobData.rows;
  console.log(brokenJobs);
  return await brokenJobs;
}
