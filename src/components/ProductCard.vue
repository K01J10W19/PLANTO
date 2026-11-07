<script setup>
import { RouterLink } from 'vue-router'
import GlassCard from './ui/GlassCard.vue'
import BaseButton from './ui/BaseButton.vue'
import BaseIcon from './ui/BaseIcon.vue'
import PlantImage from './ui/PlantImage.vue'
defineProps({ plant: Object })
</script>

<template>
  <GlassCard as="article" interactive class="group flex flex-col px-6 pb-6">
    <PlantImage :image="plant.image" :alt="plant.name" class="-mt-16"
      img-class="h-48 w-auto sm:h-56 transition-transform duration-600 ease-spring group-hover:scale-110 group-hover:-translate-y-2" />
    <h3 class="mt-6 text-h4 text-ink">
      <RouterLink :to="`/plants/${plant.types[0]}`" class="rounded-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-leaf-300 after:absolute after:inset-0 after:rounded-card">{{ plant.name }}</RouterLink>
    </h3>
    <p class="mt-2 text-caption text-ink-muted">{{ plant.text }}</p>
    <div class="mt-6 flex items-center justify-between">
      <span class="text-h4 text-ink">Rs. {{ plant.price }}/-</span>
      <BaseButton variant="icon" size="sm" class="relative z-10" :label="`Add ${plant.name} to cart`"><BaseIcon name="bag" :size="16" /></BaseButton>
    </div>
  </GlassCard>
</template>
