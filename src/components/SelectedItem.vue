<script setup>
import DefaultBlock from './DefaultBlock.vue';

defineProps(['selected'])
</script>

<template>
  <DefaultBlock>
    {{ selected.id ? selected.name : 'selected item' }}
  </DefaultBlock>
</template>

<style scoped>
</style>
