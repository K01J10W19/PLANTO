<script setup>
defineProps({ as: { type: String, default: 'h2' } })
</script>

<!-- Title framed by the offset corner brackets from the reference -->
<template>
  <div v-reveal class="flex justify-center">
    <component :is="as" class="relative px-4 py-2 text-center text-h2 text-ink">
      <span class="absolute bottom-0 left-0 h-3/4 w-6 rounded-bl-lg border-b-2 border-l-2 border-leaf-400" aria-hidden="true"></span>
      <span class="absolute right-0 top-0 h-3/4 w-6 rounded-tr-lg border-r-2 border-t-2 border-leaf-400" aria-hidden="true"></span>
      <slot />
    </component>
  </div>
</template>
