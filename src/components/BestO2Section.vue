<script setup>
import { ref, computed } from 'vue'
import BaseContainer from './ui/BaseContainer.vue'
import SectionHeading from './ui/SectionHeading.vue'
import GlassCard from './ui/GlassCard.vue'
import BaseButton from './ui/BaseButton.vue'
import BaseIcon from './ui/BaseIcon.vue'
import PlantImage from './ui/PlantImage.vue'
import { bestO2 } from '../data/plants.js'

const i = ref(0)
const slide = computed(() => bestO2[i.value])
const go = (d) => (i.value = (i.value + d + bestO2.length) % bestO2.length)
const pad = (n) => String(n).padStart(2, '0')
</script>

<template>
  <section id="best-o2" class="bg-forest-850 pb-24" aria-labelledby="o2-title" aria-roledescription="carousel">
    <BaseContainer>
      <SectionHeading id="o2-title">Our Best o2</SectionHeading>
      <GlassCard v-reveal radius="panel" class="mt-24">
        <Transition name="fade-slide" mode="out-in">
          <div :key="slide.id" class="grid grid-cols-1 items-center gap-8 px-6 pb-8 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-12 lg:py-12">
            <PlantImage :image="slide.image" :alt="slide.title" class="-mt-24 lg:-my-24" img-class="h-72 w-auto sm:h-96 lg:h-[440px]" />
            <div class="flex flex-col gap-6" aria-live="polite">
              <h3 class="max-w-[24ch] text-h3 text-ink">{{ slide.title }}</h3>
              <p v-for="(b, k) in slide.body" :key="k" class="max-w-[56ch] text-body text-ink-muted">{{ b }}</p>
              <div class="flex flex-wrap items-center justify-between gap-4">
                <BaseButton>Explore</BaseButton>
                <div class="flex items-center gap-2">
                  <BaseButton variant="ghost" label="Previous slide" @click="go(-1)"><BaseIcon name="chev-left" /></BaseButton>
                  <span class="min-w-[48px] text-center text-caption tabular-nums text-ink-muted">{{ pad(i + 1) }}/{{ pad(bestO2.length) }}</span>
                  <BaseButton variant="ghost" label="Next slide" @click="go(1)"><BaseIcon name="chev-right" /></BaseButton>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </GlassCard>
      <!-- 24px hit area per dot (WCAG target size); the visible dot stays 8px -->
      <div class="mt-12 flex justify-center" role="tablist" aria-label="Choose slide">
        <button v-for="(s, k) in bestO2" :key="s.id" type="button" role="tab" :aria-selected="k === i" :aria-label="`Slide ${k + 1}`" @click="i = k"
          class="group/dot grid h-6 place-items-center rounded-full px-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-leaf-300 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-850">
          <span :class="['block h-2 rounded-full transition-[width,background-color] duration-400 ease-out-expo',
                         k === i ? 'w-8 bg-ink' : 'w-2 bg-ink-subtle group-hover/dot:bg-ink-muted']"></span>
        </button>
      </div>
    </BaseContainer>
  </section>
</template>
