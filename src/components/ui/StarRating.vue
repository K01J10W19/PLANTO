<script setup>
defineProps({ value: { type: Number, default: 5 } })
</script>

<template>
  <div class="flex gap-1 text-sun-400" role="img" :aria-label="`${value} out of 5 stars`">
    <svg v-for="i in 5" :key="i" width="12" height="12" viewBox="0 0 24 24" :fill="i <= value ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
      <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
    </svg>
  </div>
</template>
