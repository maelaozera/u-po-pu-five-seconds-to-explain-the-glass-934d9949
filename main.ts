// Five Seconds to Explain the Glass
// A house cat's defence, delivered in a single sentence.
// The program assembles the sentence from labelled segments
// and writes it to /output/entry.txt for the judge.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry must be a single sentence, at most 200 characters.
const MAX_ENTRY_LENGTH = 200;

// Segment 1: the cat denies it was an accident.
const partOne = "It wasn't an accident, ";

// Segment 2: the cat names what it really was.
const partTwo = "it was a scheduled ";

// Segment 3: the punchline, delivered without remorse.
const partThree = "demolition.";

// A segment is one labelled piece of the sentence.
type Segment = { label: string; text: string };

const segments: Segment[] = [
  { label: "denial", text: partOne },
  { label: "relabel", text: partTwo },
  { label: "punchline", text: partThree },
];

// Check that a line is a single sentence within the length limit.
function validateLine(line: string): void {
  if (line.length > MAX_ENTRY_LENGTH) {
    throw new Error(`Entry too long: ${line.length} > ${MAX_ENTRY_LENGTH}`);
  }
  const sentences = line
    .split(".")
    .filter((piece) => piece.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error("Entry must be exactly one sentence");
  }
}

// Join the labelled segments into the final sentence.
function buildEntry(parts: Segment[]): string {
  const entry = parts.map((part) => part.text).join("");
  validateLine(entry);
  return entry;
}

// One sentence, 53 characters, in the cat's own voice.
const entry = buildEntry(segments);

// Write the finished sentence to the judge's output file.
function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

writeEntry(entry);
