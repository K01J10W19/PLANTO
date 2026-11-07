<script setup>
import BaseContainer from './ui/BaseContainer.vue'
import SectionHeading from './ui/SectionHeading.vue'
import TrendyCard from './TrendyCard.vue'
import { trendy } from '../data/plants.js'
</script>

<template>
  <section id="trendy" class="relative pb-24 pt-8" aria-labelledby="trendy-title">
    <BaseContainer>
      <SectionHeading id="trendy-title">Our Trendy plants</SectionHeading>
      <div class="mt-24 flex flex-col gap-24 lg:gap-16">
        <TrendyCard v-for="(p, i) in trendy" :key="p.id" v-reveal="i * 120" :plant="p" :reverse="i % 2 === 1" />
      </div>
    </BaseContainer>
  </section>
</template>
