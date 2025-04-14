"use server";

import { db } from "@/utils/dbConnection";

export default async function StageSubmit(id, status) {
  db.query(
    `UPDATE posts SET stage = $1
    WHERE id = $2`,
    [status, id]
  );
}
