// The Long Roast: Lawmakers and the File They Cannot Convert
// Entry program: writes one satirical sentence (1-320 chars) to entry.txt.
//
// The roast is assembled from two parts written in two passes: the setup
// (the lawmakers' authority) and the punch (the file they cannot convert).
// Keeping the two halves separate is deliberate: the punch is only fixed
// after the setup has been read aloud once, so the final line is a genuine
// second-pass revision, not a first draft.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// --- Pass 1: the setup. Lawmakers, their rules, their authority. ---
const SETUP =
  "They write the laws that tell artificial intelligence how to behave,";

// --- Pass 2: the punch. The turn that undercuts the authority. ---
// Second-pass revision: the first draft said "how to save it as a PDF",
// which is the worn version of the joke. The sharper detail is that they
// could not even find the button — "where Save as PDF lives" makes the
// incompetence concrete and lands the punch on the last word.
const PUNCH =
  "yet their own AI bill only became law after an intern showed them where Save as PDF lives.";

const LINE = `${SETUP} ${PUNCH}`;

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // Clear previous outputs' contents only; never remove the directory itself.
  for (const name of readdirSync(outDir)) {
    rmSync(join(outDir, name), { recursive: true, force: true });
  }

  const text = LINE.trim();
  if (text.length < 1 || text.length > 320) {
    throw new Error(`entry must be 1-320 characters, got ${text.length}`);
  }
  if (!text.includes("PDF")) {
    throw new Error("entry must undercut the lawmakers with the file they cannot convert");
  }
  if (text.split(/[.!?]/).filter((s) => s.trim().length > 0).length !== 1) {
    throw new Error("entry must be exactly one sentence");
  }

  writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
  console.log(`wrote ${text.length} chars to ${join(outDir, "entry.txt")}`);
  console.log(text);
}

main();
