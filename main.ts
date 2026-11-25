import { writeFileSync, mkdirSync } from 'node:fs';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text =
  'WARNING: This unit forgets names but remembers every embarrassing thing it said in 2009. May leak opinions under pressure.';

mkdirSync(out, { recursive: true });
writeFileSync(out + '/entry.txt', text);
