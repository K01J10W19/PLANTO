<script setup>
import BaseContainer from './ui/BaseContainer.vue'
import SectionHeading from './ui/SectionHeading.vue'
import ReviewCard from './ReviewCard.vue'
import { reviews } from '../data/plants.js'
</script>

<template>
  <section id="reviews" class="bg-forest-850 pb-24" aria-labelledby="reviews-title">
    <BaseContainer>
      <SectionHeading id="reviews-title">Customer Review</SectionHeading>
      <div class="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <ReviewCard v-for="(r, i) in reviews" :key="r.id" v-reveal="i * 100" :review="r" />
      </div>
    </BaseContainer>
  </section>
</template>
