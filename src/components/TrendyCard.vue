<script setup>
import GlassCard from './ui/GlassCard.vue'
import BaseButton from './ui/BaseButton.vue'
import BaseIcon from './ui/BaseIcon.vue'
import PlantImage from './ui/PlantImage.vue'
defineProps({ plant: Object, reverse: Boolean })
</script>

<template>
  <GlassCard as="article" radius="panel" interactive class="group">
    <div :class="['grid grid-cols-1 items-center gap-6 px-6 pb-8 sm:grid-cols-2 sm:gap-8 sm:px-12 sm:py-12', reverse && 'sm:[&>*:first-child]:order-2']">
      <PlantImage :image="plant.image" :alt="plant.title"
        :class="['-mt-16 sm:-my-24', reverse ? 'sm:justify-self-end' : 'sm:justify-self-start']"
        img-class="h-64 w-auto sm:h-80 transition-transform duration-600 ease-spring group-hover:scale-105 group-hover:-translate-y-2" />
      <div class="flex flex-col gap-4">
        <h3 class="text-h3 text-ink">{{ plant.title }}</h3>
        <p class="max-w-[48ch] text-caption text-ink-muted">{{ plant.text }}</p>
        <p class="text-h4 font-semibold text-ink">Rs. {{ plant.price }}/-</p>
        <div class="flex items-center gap-4">
          <BaseButton size="sm">Explore</BaseButton>
          <BaseButton variant="icon" size="sm" :label="`Add ${plant.title} to cart`"><BaseIcon name="bag" :size="16" /></BaseButton>
        </div>
      </div>
    </div>
  </GlassCard>
</template>
