<script setup>
import GlassCard from './ui/GlassCard.vue'
import StarRating from './ui/StarRating.vue'
import AppPicture from './ui/AppPicture.vue'
defineProps({ review: Object })
</script>

<template>
  <GlassCard as="figure" class="m-0 flex flex-col gap-2 p-4">
    <figcaption class="flex items-center gap-2">
      <AppPicture :image="review.avatar" class="h-10 w-10 rounded-full object-cover ring-2 ring-white/15" />
      <div class="flex flex-col gap-1">
        <span class="text-caption font-semibold text-ink">{{ review.name }}</span>
        <StarRating :value="review.rating" />
      </div>
    </figcaption>
    <blockquote class="m-0 text-caption text-ink-muted">{{ review.text }}</blockquote>
  </GlassCard>
</template>
