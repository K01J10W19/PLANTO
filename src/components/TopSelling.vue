<script setup>
import { ref, onMounted } from 'vue'
import BaseContainer from './ui/BaseContainer.vue'
import SectionHeading from './ui/SectionHeading.vue'
import SkeletonCard from './ui/SkeletonCard.vue'
import ProductCard from './ProductCard.vue'
import { topSelling } from '../data/plants.js'

// Simulated fetch → shows skeletons where product data would stream in
const products = ref(null)
onMounted(() => setTimeout(() => (products.value = topSelling), 1200))
</script>

<template>
  <section id="top-selling" class="bg-forest-850 py-24" aria-labelledby="top-selling-title" :aria-busy="!products">
    <BaseContainer>
      <SectionHeading id="top-selling-title">Our Top Selling</SectionHeading>
      <div class="mt-24 grid grid-cols-1 gap-x-8 gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
        <template v-if="!products">
          <SkeletonCard v-for="n in 6" :key="n" />
        </template>
        <ProductCard v-else v-for="(p, i) in products" :key="p.id" v-reveal="(i % 3) * 100" :plant="p" />
      </div>
    </BaseContainer>
  </section>
</template>
