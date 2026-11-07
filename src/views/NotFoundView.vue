<script setup>
import BaseButton from '../components/ui/BaseButton.vue'
import PageHeader from '../components/PageHeader.vue'
</script>

<template>
  <PageHeader title="Page Not Found" intro="This corner of the garden is empty — the page you are looking for has moved or never existed." class="min-h-[70vh]">
    <div v-reveal="160" class="mt-12 flex flex-wrap justify-center gap-4">
      <BaseButton to="/" variant="solid">Back home</BaseButton>
      <BaseButton to="/plants">Browse plants</BaseButton>
    </div>
  </PageHeader>
</template>
