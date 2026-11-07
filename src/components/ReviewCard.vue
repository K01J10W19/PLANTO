<script setup>
import GlassCard from './ui/GlassCard.vue'
import StarRating from './ui/StarRating.vue'
import AppPicture from './ui/AppPicture.vue'
defineProps({ review: Object })
</script>

<template>
  <GlassCard as="figure" interactive class="m-0 flex h-full flex-col gap-6 p-8">
    <figcaption class="flex items-center gap-4">
      <AppPicture :image="review.avatar" class="h-12 w-12 rounded-full object-cover ring-2 ring-white/15" />
      <div class="flex flex-col gap-1">
        <span class="text-h4 font-semibold text-ink">{{ review.name }}</span>
        <StarRating :value="review.rating" />
      </div>
    </figcaption>
    <blockquote class="m-0 text-body text-ink-muted">{{ review.text }}</blockquote>
  </GlassCard>
</template>
