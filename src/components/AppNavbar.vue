<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import BaseContainer from './ui/BaseContainer.vue'
import BaseButton from './ui/BaseButton.vue'
import BaseIcon from './ui/BaseIcon.vue'
import AppPicture from './ui/AppPicture.vue'
import { navLinks } from '../data/plants.js'
import { images } from '../data/images.js'

const open = ref(false)
const scrolled = ref(false)
const onScroll = () => (scrolled.value = window.scrollY > 24)
const onKey = (e) => e.key === 'Escape' && (open.value = false)
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
})

// Close the mobile menu whenever navigation happens
const route = useRoute()
watch(() => route.fullPath, () => (open.value = false))

const link =
  'relative rounded-lg px-2 py-2 text-body text-ink-muted transition-colors duration-200 hover:text-ink [&.router-link-active]:text-ink ' +
  'focus:outline-hidden focus-visible:ring-2 focus-visible:ring-leaf-300 ' +
  "after:absolute after:inset-x-2 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-leaf-300 after:transition-transform after:duration-400 after:ease-out-expo hover:after:scale-x-100"
</script>

<template>
  <header :class="['fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-400 ease-out-expo',
                   scrolled ? 'bg-forest-950/80 shadow-glass backdrop-blur-lg' : 'bg-transparent']">
    <BaseContainer>
      <nav class="flex h-16 items-center justify-between gap-4 lg:h-20" aria-label="Primary">
        <RouterLink to="/" class="flex items-center gap-2 rounded-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-leaf-300" aria-label="Planto. home">
          <AppPicture :image="images.logo" eager class="h-8 w-8 object-contain" />
          <span class="text-body-lg font-bold text-ink">Planto.</span>
        </RouterLink>

        <ul class="hidden items-center gap-6 lg:flex">
          <li v-for="l in navLinks" :key="l.label" class="group relative">
            <RouterLink :to="l.to" :class="[link, 'inline-flex items-center gap-1']" :aria-haspopup="l.children ? 'true' : undefined">
              {{ l.label }}<span v-if="l.srLabel" class="sr-only"> {{ l.srLabel }}</span>
              <BaseIcon v-if="l.children" name="chev-down" :size="16" class="transition-transform duration-400 ease-out-expo group-hover:rotate-180 group-focus-within:rotate-180" />
            </RouterLink>
            <div v-if="l.children"
              class="invisible absolute left-0 top-full translate-y-2 pt-2 opacity-0 transition-[opacity,transform,translate,visibility] duration-400 ease-out-expo group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <ul class="flex w-48 flex-col gap-1 rounded-2xl border border-white/15 bg-forest-850/95 p-2 shadow-lift backdrop-blur-lg">
                <li v-for="c in l.children" :key="c.to">
                  <RouterLink :to="c.to" class="block rounded-lg px-4 py-2 text-body text-ink-muted transition-colors duration-200 hover:bg-white/10 hover:text-ink focus:outline-hidden focus-visible:bg-white/10 focus-visible:text-ink [&.router-link-active]:text-ink">{{ c.label }}</RouterLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <div class="flex items-center gap-2">
          <BaseButton variant="ghost" label="Search"><BaseIcon name="search" /></BaseButton>
          <BaseButton variant="ghost" label="Cart"><BaseIcon name="bag" /></BaseButton>
          <BaseButton variant="ghost" :label="open ? 'Close menu' : 'Open menu'" @click="open = !open" :aria-expanded="open" aria-controls="mobile-menu">
            <BaseIcon :name="open ? 'close' : 'menu'" :size="24" />
          </BaseButton>
        </div>
      </nav>

      <Transition name="drop">
        <div v-if="open" id="mobile-menu" class="mb-4 rounded-card border border-white/15 bg-forest-850/95 p-4 shadow-lift backdrop-blur-lg">
          <ul class="flex flex-col gap-1">
            <li v-for="l in navLinks" :key="l.label">
              <RouterLink :to="l.to"
                 class="block rounded-lg px-4 py-4 text-body-lg text-ink transition-colors duration-200 hover:bg-white/10 focus:outline-hidden focus-visible:bg-white/10 [&.router-link-exact-active]:bg-white/10">{{ l.label }}<span v-if="l.srLabel" class="sr-only"> {{ l.srLabel }}</span></RouterLink>
            </li>
          </ul>
        </div>
      </Transition>
    </BaseContainer>
  </header>
</template>
