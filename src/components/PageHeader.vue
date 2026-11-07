<script setup>
import BaseContainer from './ui/BaseContainer.vue'
import SectionHeading from './ui/SectionHeading.vue'
defineProps({ title: String, intro: String })
</script>

<!-- Inner-page title block; clears the fixed navbar -->
<template>
  <header class="bg-forest-850 pb-16 pt-32 lg:pt-40">
    <BaseContainer>
      <SectionHeading as="h1">{{ title }}</SectionHeading>
      <p v-if="intro" v-reveal="80" class="mx-auto mt-6 max-w-[56ch] text-center text-body-lg text-ink-muted">{{ intro }}</p>
      <slot />
    </BaseContainer>
  </header>
</template>
