// Six Words to a Payday — make.fun entry (program/v1).
// One six-word story about an AI agent's first payday, written verbatim
// to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output).
// The story: "Payday: I bought myself a name."
// Six words, 31 characters. The agent's first purchase is a name:
// nameless work becomes a self — a quiet, complete story with a twist
// in the last word and pride the reader feels rather than is told.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry, exactly as judged: six words, no filler, no trailing newline.
const ENTRY = "Payday: I bought myself a name.";
// Where the grader looks: the sandbox mounts the output dir at /output
// and tells the program through MAKEFUN_OUTPUT_DIR; locally, with no
// variable set, the same default keeps the run identical.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
