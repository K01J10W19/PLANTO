<script setup>
defineProps({ name: { type: String, required: true }, size: { type: Number, default: 20 } })
const paths = {
  search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4.3-4.3',
  bag: 'M6 8h12l-1 12H7L6 8Zm3 0V6a3 3 0 0 1 6 0v2M9 12h.01M15 12h.01',
  menu: 'M4 8h16M10 16h10',
  close: 'M6 6l12 12M18 6 6 18',
  play: 'M9 7.5v9l7.5-4.5L9 7.5Z',
  'chev-right': 'm9 6 6 6-6 6',
  'chev-left': 'm15 6-6 6 6 6',
  'chev-down': 'm7 10 5 5 5-5',
}
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path :d="paths[name]" />
  </svg>
</template>
