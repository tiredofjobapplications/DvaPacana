<script setup>
import DefaultBlock from './DefaultBlock.vue';

defineProps(['selected', 'count'])
</script>

<template>
  <DefaultBlock class="UserItems">
    <ul class="UserItems__list">
      <li
        v-for="item in selected"
        :key="item.id"
        class="UserItems__listItem"
      >
        {{ item.name }}
      </li>
    </ul>
    selected: {{ selected.length }} / {{ count }}
  </DefaultBlock>
</template>

<style scoped>
.UserItems__list {
  list-style: none;
  padding: 0;
  gap: 8px;
  display: flex;
  flex-wrap: wrap;
}

.UserItems__listItem {
  border: 2px solid #000;
  padding: 0px 2px;
}
</style>
