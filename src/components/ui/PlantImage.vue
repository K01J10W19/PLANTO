<script setup>
import { ref } from 'vue'
import AppPicture from './AppPicture.vue'
defineProps({ image: Object, alt: String, imgClass: String, float: Boolean, eager: Boolean })
const loaded = ref(false)
</script>

<!-- Image with skeleton placeholder until decoded -->
<template>
  <div class="relative">
    <div v-if="!loaded" class="skeleton absolute inset-x-8 inset-y-4 rounded-card" aria-hidden="true"></div>
    <AppPicture :image="image" :alt="alt" :eager="eager" @load="loaded = true"
      :class="['relative mx-auto object-contain drop-shadow-[0_24px_32px_rgba(0,0,0,0.5)] transition-opacity duration-600 ease-out-expo',
               loaded ? 'opacity-100' : 'opacity-0', float && 'float', imgClass]" />
  </div>
</template>
