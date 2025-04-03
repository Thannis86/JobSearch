"use server";

import { db } from "@/utils/dbConnection";

export default function StageSubmit(formvalues) {
  const stage = formvalues.get("stage");
  const id = formvalues.get("id");
  db.query(
    `UPDATE posts SET stage = $1
    WHERE id = $2`,
    [stage, id]
  );
}
