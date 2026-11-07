<script setup>
defineOptions({ inheritAttrs: false })
defineProps({
  image: { type: Object, required: true }, // { src, avif, webp, width, height } from data/images.js
  alt: { type: String, default: '' },
  eager: Boolean, // above-the-fold: load immediately with high priority
})
</script>

<!-- AVIF → WebP → original fallback; intrinsic size reserves layout space -->
<template>
  <picture class="contents">
    <source :srcset="image.avif" type="image/avif" />
    <source :srcset="image.webp" type="image/webp" />
    <img v-bind="$attrs" :src="image.src" :alt="alt" :width="image.width" :height="image.height"
      :loading="eager ? 'eager' : 'lazy'" :fetchpriority="eager ? 'high' : undefined" decoding="async" />
  </picture>
</template>
