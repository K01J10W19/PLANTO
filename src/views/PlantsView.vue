<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'
import BaseContainer from '../components/ui/BaseContainer.vue'
import PageHeader from '../components/PageHeader.vue'
import ProductCard from '../components/ProductCard.vue'
import { catalog, plantTypes } from '../data/plants.js'

const props = defineProps({ type: String })

const current = computed(() => plantTypes.find((t) => t.slug === props.type))
const plants = computed(() => (current.value ? catalog.filter((p) => p.types.includes(current.value.slug)) : catalog))

// Per-category metadata overrides the route defaults
useHead(computed(() => !current.value ? {} : {
  title: current.value.title,
  meta: [
    { name: 'description', content: current.value.description },
    { name: 'keywords', content: `${current.value.label.toLowerCase()} plants, buy ${current.value.label.toLowerCase()} plants, Planto` },
    { property: 'og:title', content: current.value.title },
    { property: 'og:description', content: current.value.description },
  ],
}))

const filters = [{ label: 'All', to: '/plants' }, ...plantTypes.map((t) => ({ label: t.label, to: `/plants/${t.slug}` }))]
const pill =
  'inline-flex h-10 items-center rounded-lg border border-ink/80 px-6 text-body font-medium text-ink ' +
  'transition-[background-color,color,border-color,transform,scale] duration-200 ease-out-expo hover:bg-ink hover:text-forest-900 active:scale-[0.96] ' +
  'focus:outline-hidden focus-visible:ring-2 focus-visible:ring-leaf-300 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-850 ' +
  '[&.router-link-exact-active]:bg-ink [&.router-link-exact-active]:text-forest-900'
</script>

<template>
  <div>
    <PageHeader :title="current ? current.title : 'Our Plants'"
      :intro="current ? current.description : 'Every plant in the Planto collection — filter by the kind of space you are greening up.'">
      <nav class="mt-12" aria-label="Plant types">
        <ul class="flex flex-wrap justify-center gap-4">
          <li v-for="f in filters" :key="f.to"><RouterLink :to="f.to" :class="pill">{{ f.label }}</RouterLink></li>
        </ul>
      </nav>
    </PageHeader>

    <section class="bg-forest-850 pb-24 pt-16" aria-label="Plants">
      <BaseContainer>
        <h2 class="text-center text-caption text-ink-subtle" aria-live="polite">{{ plants.length }} plants</h2>
        <div class="mt-24 grid grid-cols-1 gap-x-8 gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard v-for="(p, i) in plants" :key="p.id" v-reveal="(i % 3) * 100" :plant="p" />
        </div>
      </BaseContainer>
    </section>
  </div>
</template>
