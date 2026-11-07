<script setup>
import GlassCard from './ui/GlassCard.vue'
import BaseButton from './ui/BaseButton.vue'
import BaseIcon from './ui/BaseIcon.vue'
import PlantImage from './ui/PlantImage.vue'
defineProps({ plant: Object })
</script>

<template>
  <GlassCard as="article" radius="panel" interactive class="group px-8 pb-6 pt-0">
    <PlantImage :image="plant.image" :alt="plant.name" float eager
      class="-mt-16" img-class="h-56 w-auto transition-transform duration-600 ease-spring group-hover:scale-105 group-hover:-rotate-2" />
    <div class="mt-6 flex flex-col gap-2">
      <p class="text-caption text-ink-subtle">{{ plant.eyebrow }}</p>
      <div class="flex items-center justify-between gap-4">
        <h2 class="text-h3 font-medium text-ink">{{ plant.name }}</h2>
        <BaseButton variant="ghost" size="sm" :label="`View ${plant.name}`">
          <BaseIcon name="chev-right" class="transition-transform duration-400 ease-spring group-hover:translate-x-1" />
        </BaseButton>
      </div>
      <BaseButton size="sm" class="mt-2 self-start">Buy Now</BaseButton>
    </div>
    <div class="mt-6 flex justify-center gap-2" aria-hidden="true">
      <span class="h-1 w-6 rounded-full bg-ink"></span>
      <span class="h-1 w-1 rounded-full bg-ink-subtle"></span>
      <span class="h-1 w-1 rounded-full bg-ink-subtle"></span>
    </div>
  </GlassCard>
</template>
