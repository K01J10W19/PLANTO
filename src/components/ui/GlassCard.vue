<script setup>
defineProps({ as: { type: String, default: 'div' }, radius: { type: String, default: 'card' }, interactive: Boolean })
</script>

<template>
  <component :is="as"
    :class="[
      'relative border border-white/15 bg-white/[0.04] shadow-glass backdrop-blur-md',
      radius === 'panel' ? 'rounded-[32px] lg:rounded-panel' : 'rounded-card',
      interactive && 'transition-[transform,translate,border-color,box-shadow,background-color] duration-600 ease-out-expo hover:-translate-y-2 hover:border-leaf-300/40 hover:bg-white/[0.06] hover:shadow-lift focus-within:border-leaf-300/50',
    ]">
    <slot />
  </component>
</template>
