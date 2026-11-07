import { images } from './images.js'

const { plants: p, avatars } = images
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const heroReview = {
  name: 'Alena Patel',
  avatar: avatars.alena,
  rating: 5,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

export const featured = {
  eyebrow: 'Trendy House Plant',
  name: 'Calathea plant',
  image: p.dieffenbachia,
}

export const trendy = [
  { id: 't1', title: 'For Small Decs Ai Plat', text: lorem, price: 599, image: p.pothos },
  { id: 't2', title: 'For Fresh Decs Ai Plat', text: lorem, price: 579, image: p.aloe },
]

// Plant categories → /plants/:type
export const plantTypes = [
  { slug: 'indoor', label: 'Indoor', title: 'Indoor Plants', description: 'Easy-going indoor plants that bring calm, green texture to every room.' },
  { slug: 'succulents', label: 'Succulents', title: 'Succulent Plants', description: 'Sculptural succulents and cacti that thrive on sunshine and very little water.' },
  { slug: 'air-purifying', label: 'Air purifying', title: 'Air Purifying Plants', description: 'Hard-working greens that help freshen the air you breathe at home.' },
  { slug: 'low-light', label: 'Low light', title: 'Low Light Plants', description: 'Shade-tolerant plants that stay lush in darker corners and offices.' },
]

const short = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
export const catalog = [
  { id: 'p1', name: 'Calathea plant', text: short, price: 359, image: p.dieffenbachia, types: ['indoor', 'low-light', 'air-purifying'] },
  { id: 'p2', name: 'Pothos plant', text: short, price: 359, image: p.pothos, types: ['indoor', 'air-purifying', 'low-light'] },
  { id: 'p3', name: 'Golden cactus', text: short, price: 359, image: p.cactus, types: ['succulents'] },
  { id: 'p4', name: 'Monstera plant', text: short, price: 359, image: p.monstera, types: ['indoor', 'air-purifying'] },
  { id: 'p5', name: 'Bird of paradise', text: short, price: 359, image: p.birdOfParadise, types: ['indoor'] },
  { id: 'p6', name: 'Haworthia plant', text: short, price: 359, image: p.haworthia, types: ['succulents', 'low-light'] },
  { id: 'p7', name: 'Aloe vera', text: short, price: 299, image: p.aloe, types: ['succulents', 'air-purifying'] },
]
export const topSelling = catalog.slice(0, 6)

const reviewText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
export const reviews = [
  { id: 'r1', name: 'Maxn Raval', avatar: avatars.maxn, rating: 5, text: reviewText },
  { id: 'r2', name: 'Venely K', avatar: avatars.venely, rating: 5, text: reviewText },
  { id: 'r3', name: 'Lii Thakur', avatar: avatars.lii, rating: 5, text: reviewText },
]

export const bestO2 = [
  { id: 'o1', title: 'We Have Small And Best O2 Plants Collection’s', image: p.dieffenbachia },
  { id: 'o2', title: 'Low-Light Heroes For Every Corner', image: p.monstera },
  { id: 'o3', title: 'Air-Purifying Succulents, Zero Fuss', image: p.haworthia },
  { id: 'o4', title: 'Statement Greens For Bright Rooms', image: p.birdOfParadise },
].map((s) => ({ ...s, body: [lorem, `${lorem} Ut enim ad minim veniam.`] }))

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Plants Type', to: '/plants', children: plantTypes.map((t) => ({ label: t.label, to: `/plants/${t.slug}` })) },
  { label: 'More', srLabel: 'customer reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]
