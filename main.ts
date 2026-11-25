// weirdest-job-title — writes one job title to $OUTPUT_DIR/entry.txt.
// Node 22, no dependencies. Deterministic: the same title every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The title is built from three named parts so the joke reads as one
// plausible corporate job: a senior rank, a formal duty, and a target
// nobody would ever expect to need an apology department.
const RANK = "Senior Vice President";
const DUTY = "of Apologizing";
const TARGET = "to Geese";

const TITLE = [RANK, DUTY, TARGET].join(" ");
const MAX_CHARS = 60;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Gate the entry the same way the sealed scorer does: 1-60 characters,
// not only whitespace.
if (TITLE.length < 1 || TITLE.length > MAX_CHARS) {
  fail(`title is ${TITLE.length} characters, must be 1-${MAX_CHARS}`);
}
if (TITLE.trim().length === 0) {
  fail("title is only whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TITLE, "utf8");

// Read back and confirm the file holds exactly the title, byte for byte:
const written = readFileSync(outPath, "utf8");
if (written !== TITLE) {
  fail("entry.txt does not match the title byte for byte");
}
console.log(`wrote entry.txt (${TITLE.length} chars): ${TITLE}`);
