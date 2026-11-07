<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from '../components/AppNavbar.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<!-- Persistent shell: navbar + footer stay mounted, only <main> swaps per route -->
<template>
  <div class="min-h-screen bg-forest-900 font-sans text-ink antialiased">
    <a href="#main" class="sr-only z-60 rounded-lg bg-ink px-4 py-2 text-forest-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
    <AppNavbar />
    <!-- min-h keeps the footer below the fold while lazy route chunks load (no CLS) -->
    <main id="main" tabindex="-1" class="min-h-svh focus:outline-hidden">
      <RouterView v-slot="{ Component, route }">
        <Transition name="fade-slide" mode="out-in">
          <component :is="Component" :key="route.name" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
  </div>
</template>
