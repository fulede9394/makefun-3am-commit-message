import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// 3 AM commit message: a fix nobody understands, shipped at 3 AM anyway, stakes included.
const LINE =
  "fix: changed one thing at 3am and now everything works — I don't know what I changed, please don't rebase, the tests pass and so do I (to bed, permanently if this breaks)";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
