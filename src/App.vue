<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import DefaultLayout from './layouts/DefaultLayout.vue'

// Route-level SEO defaults; views can override with their own useHead()
const route = useRoute()
useHead(computed(() => {
  const { title, description, keywords, noindex } = route.meta
  const url = typeof window !== 'undefined' ? window.location.origin + route.path : route.path
  return {
    title,
    titleTemplate: (t) => (t ? `${t} · Planto.` : 'Planto.'),
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'robots', content: noindex ? 'noindex' : 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Planto.' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
    ],
    link: [{ rel: 'canonical', href: url }],
  }
}))
</script>

<template>
  <DefaultLayout />
</template>
