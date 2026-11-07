<script setup>
import BaseContainer from './ui/BaseContainer.vue'
import BaseButton from './ui/BaseButton.vue'
import BaseIcon from './ui/BaseIcon.vue'
import FeaturedCard from './FeaturedCard.vue'
import ReviewBadge from './ReviewBadge.vue'
import { featured, heroReview } from '../data/plants.js'
</script>

<template>
  <section id="top" class="relative">
    <BaseContainer>
      <div class="grid grid-cols-1 gap-16 pb-16 pt-32 lg:grid-cols-12 lg:gap-8 lg:pt-32">
        <div class="flex flex-col gap-6 lg:col-span-7 xl:col-span-8">
          <h1 v-reveal class="text-display text-ink/95">Breath Natural</h1>
          <p v-reveal="80" class="max-w-[56ch] text-body-lg text-ink-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div v-reveal="160" class="flex flex-wrap items-center gap-6">
            <BaseButton href="#trendy">Explore</BaseButton>
            <a href="#best-o2"
               class="group inline-flex items-center gap-4 rounded-full pr-4 text-body text-ink-muted transition-colors duration-200 hover:text-ink focus:outline-hidden focus-visible:ring-2 focus-visible:ring-leaf-300">
              <span class="grid h-12 w-12 place-items-center rounded-full border border-ink/80 transition-[transform,scale,background-color,color] duration-400 ease-spring group-hover:scale-110 group-hover:bg-ink group-hover:text-forest-900">
                <BaseIcon name="play" :size="20" />
              </span>
              Live Demo…
            </a>
          </div>
          <ReviewBadge v-reveal="240" :review="heroReview" class="mt-8 max-w-[288px] lg:mt-24" />
        </div>

        <div class="lg:col-span-5 lg:pt-8 xl:col-span-4">
          <FeaturedCard v-reveal="200" :plant="featured" class="mx-auto max-w-[400px] lg:ml-auto lg:mr-0" />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
