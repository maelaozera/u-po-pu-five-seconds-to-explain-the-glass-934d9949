// Five Seconds to Explain the Glass
// A house cat's defence, delivered in a single sentence.
// The program assembles the sentence from labelled segments
// and writes it to /output/entry.txt for the judge.

import { mkdirSync, writeFileSync } from "node:fs";

// Segment 1: the cat denies it was an accident.
const partOne = "It wasn't an accident, ";

// Segment 2: the cat names what it really was.
const partTwo = "it was a scheduled ";

// Segment 3: the punchline, delivered without remorse.
const partThree = "demolition.";

// One sentence, 53 characters, in the cat's own voice.
const entry = partOne + partTwo + partThree;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
