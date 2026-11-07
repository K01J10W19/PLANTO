// Every asset ships as AVIF + WebP + original (see scripts/optimize-images.mjs).
// Intrinsic width/height are kept with the path so <img> reserves space (no CLS).
const base = import.meta.env.BASE_URL

export const img = (path, width, height) => {
  const stem = `${base}assets/${path.replace(/\.\w+$/, '')}`
  return { src: `${base}assets/${path}`, avif: `${stem}.avif`, webp: `${stem}.webp`, width, height }
}

export const images = {
  logo: img('logo-mark.png', 84, 102),
  backdrop: {
    ...img('hero-backdrop.jpg', 1728, 2620),
    srcset: (ext) => `${base}assets/hero-backdrop-864.${ext} 864w, ${base}assets/hero-backdrop.${ext} 1728w`,
  },
  avatars: {
    alena: img('avatars/alena.png', 62, 62),
    maxn: img('avatars/maxn.png', 84, 84),
    venely: img('avatars/venely.png', 84, 84),
    lii: img('avatars/lii.png', 84, 84),
  },
  plants: {
    aloe: img('plants/aloe.png', 197, 413),
    birdOfParadise: img('plants/bird-of-paradise.png', 263, 411),
    cactus: img('plants/cactus.png', 205, 431),
    dieffenbachia: img('plants/dieffenbachia.png', 789, 806),
    haworthia: img('plants/haworthia.png', 362, 563),
    monstera: img('plants/monstera.png', 231, 379),
    pothos: img('plants/pothos.png', 389, 367),
  },
}
