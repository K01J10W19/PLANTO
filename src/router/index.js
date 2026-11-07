import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { plantTypes } from '../data/plants.js'

const typeSlugs = plantTypes.map((t) => t.slug)

// meta → page <title>, description and keywords (applied in App.vue via @unhead/vue)
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Breath Natural',
      description: 'Shop trendy house plants, top-selling indoor greens and air-purifying O2 plants at Planto.',
      keywords: 'plant shop, house plants, indoor plants, buy plants online, Planto',
    },
  },
  {
    path: '/plants/:type?',
    name: 'plants',
    component: () => import('../views/PlantsView.vue'),
    props: true,
    beforeEnter: (to) =>
      !to.params.type || typeSlugs.includes(to.params.type) ||
      { name: 'not-found', params: { pathMatch: to.path.slice(1).split('/') }, replace: true },
    meta: {
      title: 'Plants',
      description: 'Browse every Planto plant — indoor, succulents, air purifying and low light varieties.',
      keywords: 'plants catalog, indoor plants, succulents, air purifying plants, low light plants',
    },
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import('../views/ReviewsView.vue'),
    meta: {
      title: 'Customer Reviews',
      description: 'Read what Planto customers say about our plants, packaging and delivery.',
      keywords: 'Planto reviews, plant shop reviews, customer testimonials',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact',
      description: 'Get in touch with the Planto team for plant care advice, orders and partnerships.',
      keywords: 'contact Planto, plant care help, plant shop support',
    },
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/PrivacyView.vue'),
    meta: {
      title: 'Privacy Policy',
      description: 'How Planto collects, uses and protects your personal information.',
      keywords: 'Planto privacy policy, data protection',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      title: 'Page Not Found',
      description: 'The page you are looking for could not be found.',
      keywords: '',
      noindex: true,
    },
  },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 80, behavior: 'smooth' }
    if (to.path === from.path) return false // query/param tweaks on the same page keep scroll
    return { top: 0 }
  },
})
