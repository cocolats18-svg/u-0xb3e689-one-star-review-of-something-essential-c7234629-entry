// One-Star Review of Something Essential — make.fun bounty entry.
// Writes a single deadpan one-star review (<= 160 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. Sleep takes a third of my life and returns me unrested, like a subscription I cannot cancel.";

// The gate requires 1-160 characters, a single line, not only whitespace.
if (REVIEW.length < 1 || REVIEW.length > 160 || REVIEW.includes("\n")) {
  throw new Error(`Review is ${REVIEW.length} chars; must be 1-160 on one line.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
