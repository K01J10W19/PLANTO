<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
  variant: { type: String, default: 'outline' }, // outline | solid | icon | ghost
  size: { type: String, default: 'md' },         // sm | md
  to: [String, Object], // in-app route → RouterLink
  href: String,
  label: String, // aria-label for icon buttons
})
const base =
  'group inline-flex items-center justify-center gap-2 font-medium select-none ' +
  'transition-[background-color,color,border-color,transform,scale,box-shadow] duration-200 ease-out-expo ' +
  'active:scale-[0.96] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-leaf-300 ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900'
const variants = {
  outline: 'rounded-lg border border-ink/80 text-ink hover:bg-ink hover:text-forest-900 hover:border-ink',
  solid: 'rounded-lg bg-ink text-forest-900 hover:bg-leaf-300',
  icon: 'rounded-lg border border-ink/70 text-ink hover:bg-leaf-300 hover:border-leaf-300 hover:text-forest-900',
  ghost: 'rounded-full text-ink hover:bg-white/10',
}
const sizes = {
  sm: { outline: 'h-8 px-4 text-caption', solid: 'h-8 px-4 text-caption', icon: 'h-8 w-8', ghost: 'h-8 w-8' },
  md: { outline: 'h-10 px-6 text-body', solid: 'h-10 px-6 text-body', icon: 'h-10 w-10', ghost: 'h-10 w-10' },
}
const cls = [base, variants[props.variant], sizes[props.size][props.variant]]
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="cls" :aria-label="label"><slot /></RouterLink>
  <a v-else-if="href" :href="href" :class="cls" :aria-label="label"><slot /></a>
  <button v-else type="button" :class="cls" :aria-label="label"><slot /></button>
</template>
