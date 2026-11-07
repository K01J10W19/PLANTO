// v-reveal="120" → fades/rises in when scrolled into view, optional delay (ms)
let io
const getObserver = () =>
  io ||
  (io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target) }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  ))

export const vReveal = {
  mounted(el, { value }) {
    el.classList.add('reveal')
    if (value) el.style.setProperty('--reveal-delay', `${value}ms`)
    getObserver().observe(el)
  },
  unmounted(el) { getObserver().unobserve(el) },
}
