<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import BaseContainer from './ui/BaseContainer.vue'
import AppPicture from './ui/AppPicture.vue'
import { images } from '../data/images.js'

const email = ref('')
const status = ref('idle') // idle | loading | done
const submit = () => {
  if (!email.value) return
  status.value = 'loading'
  setTimeout(() => (status.value = 'done'), 1200)
}
const links = [
  { label: 'Home', to: '/' },
  { label: 'Type’s Of plant’s', to: '/plants' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy', to: '/privacy' },
]
const socials = [
  { label: 'FB', name: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'TW', name: 'Twitter', href: 'https://x.com/' },
  { label: 'LI', name: 'LinkedIn', href: 'https://www.linkedin.com/' },
]
const linkCls = 'rounded-sm text-caption text-ink-muted transition-colors duration-200 hover:text-leaf-300 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-leaf-300'
</script>

<template>
  <footer id="footer" class="bg-forest-950 py-16 lg:py-24">
    <BaseContainer>
      <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div class="flex flex-col gap-6 lg:col-span-5">
          <RouterLink to="/" class="flex items-center gap-2 self-start rounded-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-leaf-300" aria-label="Planto. home">
            <AppPicture :image="images.logo" class="h-12 w-12 object-contain" />
            <span class="text-h2 font-bold text-ink">Planto.</span>
          </RouterLink>
          <p class="max-w-[40ch] text-body text-ink-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <nav class="flex flex-col gap-4 lg:col-span-3" aria-label="Quick links">
          <h2 class="text-body font-bold text-ink">Quick Link’s</h2>
          <ul class="flex flex-col gap-2">
            <li v-for="l in links" :key="l.to"><RouterLink :to="l.to" :class="linkCls">{{ l.label }}</RouterLink></li>
          </ul>
        </nav>

        <div class="flex flex-col gap-4 sm:col-span-2 lg:col-span-4">
          <h2 class="text-body font-bold text-ink">For Every Update.</h2>
          <form class="flex h-12 items-stretch rounded-lg border border-ink/70 p-1 transition-colors duration-200 focus-within:border-leaf-300" @submit.prevent="submit">
            <label for="footer-email" class="sr-only">Email address</label>
            <input id="footer-email" v-model="email" type="email" placeholder="Enter Email" autocomplete="email" required
              class="min-w-0 flex-1 bg-transparent px-4 text-caption text-ink placeholder:text-ink-subtle focus:outline-hidden" />
            <button type="submit" :disabled="status === 'loading'"
              class="inline-flex min-w-28 items-center justify-center gap-2 rounded-md bg-ink px-4 text-overline font-bold uppercase text-forest-900 transition-[background-color,transform,scale] duration-200 ease-out-expo hover:bg-leaf-300 active:scale-[0.96] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-leaf-300 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 disabled:cursor-wait">
              <span v-if="status === 'loading'" class="h-4 w-4 animate-spin rounded-full border-2 border-forest-900/30 border-t-forest-900" role="status" aria-label="Subscribing"></span>
              <span v-else>{{ status === 'done' ? 'Subscribed' : 'Subscribe' }}</span>
            </button>
          </form>
        </div>
      </div>

      <div class="mt-16 flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-center">
        <ul class="flex gap-8">
          <li v-for="s in socials" :key="s.label">
            <a :href="s.href" target="_blank" rel="noopener noreferrer" :aria-label="`${s.name} (opens in a new tab)`" class="rounded-sm text-body font-bold text-ink transition-colors duration-200 hover:text-leaf-300 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-leaf-300">{{ s.label }}</a>
          </li>
        </ul>
        <p class="text-caption text-ink-muted">planto © all right reserve</p>
      </div>
    </BaseContainer>
  </footer>
</template>
