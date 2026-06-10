// One-off image optimizer: convert raster images to WebP, downscale oversized
// ones, and remove the originals. Run with: node scripts/optimize-images.mjs
import { readdir, stat, unlink, readFile, writeFile } from "node:fs/promises";
import { join, extname, dirname, basename } from "node:path";
import sharp from "sharp";

const RASTER = new Set([".png", ".jpg", ".jpeg"]);
const MAX_SIDE = 1600; // plenty for the modal (max-w-3xl) at 2x DPI
const FAVICON = { name: "Logo-AP.png", maxSide: 256 };
const QUALITY = 80;

// Directories whose raster contents get converted, plus a few loose files.
const DIRS = ["public/proyectos", "public/educacion"];
const LOOSE = ["public/IMG.png", "public/Logo-AP.png"];

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;

async function collect() {
  const files = [];
  for (const dir of DIRS) {
    for (const entry of await readdir(dir)) {
      if (RASTER.has(extname(entry).toLowerCase())) files.push(join(dir, entry));
    }
  }
  files.push(...LOOSE);
  return files;
}

async function run() {
  const files = await collect();
  let before = 0;
  let after = 0;
  const rows = [];

  for (const file of files) {
    const srcBytes = (await stat(file)).size;
    const maxSide = basename(file) === FAVICON.name ? FAVICON.maxSide : MAX_SIDE;
    const out = join(dirname(file), basename(file, extname(file)) + ".webp");

    const buf = await sharp(await readFile(file))
      .rotate() // respect EXIF orientation before stripping metadata
      .resize({ width: maxSide, height: maxSide, fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toBuffer();

    await writeFile(out, buf);
    await unlink(file);

    before += srcBytes;
    after += buf.length;
    rows.push({ file: out, from: srcBytes, to: buf.length });
  }

  rows.sort((a, b) => b.from - a.from);
  for (const r of rows) {
    const pct = (100 * (1 - r.to / r.from)).toFixed(0);
    console.log(`${r.file.padEnd(42)} ${kb(r.from).padStart(10)} -> ${kb(r.to).padStart(10)}  (-${pct}%)`);
  }
  console.log("-".repeat(80));
  console.log(`TOTAL  ${kb(before)} -> ${kb(after)}  (-${(100 * (1 - after / before)).toFixed(1)}%, ${files.length} images)`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
