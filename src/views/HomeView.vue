<script setup>
import HeroSection from '../components/HeroSection.vue'
import TrendySection from '../components/TrendySection.vue'
import TopSelling from '../components/TopSelling.vue'
import ReviewsSection from '../components/ReviewsSection.vue'
import BestO2Section from '../components/BestO2Section.vue'
import { images } from '../data/images.js'

const { backdrop } = images
</script>

<template>
  <div>
    <!-- Shared photographic backdrop behind hero + trendy -->
    <div class="relative isolate overflow-hidden">
      <picture class="contents" aria-hidden="true">
        <source :srcset="backdrop.srcset('avif')" type="image/avif" sizes="100vw" />
        <source :srcset="backdrop.srcset('webp')" type="image/webp" sizes="100vw" />
        <img :src="backdrop.src" :srcset="backdrop.srcset('jpg')" sizes="100vw" alt="" :width="backdrop.width" :height="backdrop.height"
          fetchpriority="high" decoding="async"
          class="absolute inset-0 -z-10 h-full w-full bg-forest-950 object-cover object-[center_top_20%]" />
      </picture>
      <div class="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(17,22,15,0.55)_0%,rgba(17,22,15,0.15)_40%,rgba(31,39,28,0.9)_92%,#1F271C_100%)]" aria-hidden="true"></div>
      <HeroSection />
      <TrendySection />
    </div>
    <TopSelling />
    <ReviewsSection />
    <BestO2Section />
  </div>
</template>
