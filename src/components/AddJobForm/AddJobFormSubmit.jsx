"use server";

import { db } from "@/utils/dbConnection";

export default async function AddJobFormSubmit(formvalues) {
  const company = formvalues.get("company");
  const job_title = formvalues.get("job_title");
  const salary = formvalues.get("salary");
  const link = formvalues.get("link");
  //   db.query(
  //     `INSERT INTO posts (company, job_title, salary, link, date) VALUES($1, $2, $3, $4, CURRENT_DATE)`,
  //     [company, job_title, salary, link]
  //   );
  db.query(
    `INSERT INTO posts (company, job_title, salary, link, date, stage) VALUES ($1, $2, $3, $4, CURRENT_DATE, 'Applied')`,
    [company, job_title, salary, link]
  );
}
