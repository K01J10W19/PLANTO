// Generates AVIF + WebP siblings for every original PNG/JPG in public/assets
// (the original stays as the <picture> fallback).
// Usage: npm run images — rerun after adding or replacing an original.
import { readdir } from 'node:fs/promises'
import { dirname, extname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const assetsDir = join(root, 'public/assets')

// Extra downscaled widths for large photos (served via srcset)
const variants = { 'hero-backdrop.jpg': [864] }
const isVariant = (name) => /-\d+\.\w+$/.test(name) // e.g. hero-backdrop-864.jpg (generated)

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(p)
    else if (/\.(png|jpe?g)$/i.test(entry.name) && !isVariant(entry.name)) yield p
  }
}

async function encode(input, base, width) {
  const pipeline = () => (width ? sharp(input).resize({ width }) : sharp(input))
  await Promise.all([
    pipeline().avif({ quality: 55, effort: 6 }).toFile(`${base}.avif`),
    pipeline().webp({ quality: 78, effort: 6 }).toFile(`${base}.webp`),
  ])
}

for await (const file of walk(assetsDir)) {
  const rel = relative(assetsDir, file).replaceAll('\\', '/')
  const ext = extname(file)
  const base = file.slice(0, -ext.length)

  await encode(file, base)

  for (const w of variants[rel] ?? []) {
    await encode(file, `${base}-${w}`, w)
    await sharp(file).resize({ width: w }).jpeg({ quality: 78, mozjpeg: true }).toFile(`${base}-${w}${ext}`)
  }
  console.log('✓', rel)
}
