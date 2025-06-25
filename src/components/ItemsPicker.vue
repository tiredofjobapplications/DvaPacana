<script setup>
import DefaultBlock from './DefaultBlock.vue';

const props = defineProps({
  mode: {
    type: String,
    default: 'single',
    validator(value) {
      return ['single', 'multiple'].includes(value);
    },
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const model = defineModel({default: {}});

function toggleElementInArray(arr, element) {
  const index = arr.findIndex(v => v.id === element.id);

  if (index === -1) {
    return [...arr, element];
  } else {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
}

function isActive(item) {
  if (props.mode === 'multiple') {
    return model.value.find(v => v.id === item.id);
  }

  if (props.mode === 'single') {
    return model.value.id === item.id;
  }
}

function update(item) {
  if (props.mode === 'multiple') {
    model.value = toggleElementInArray(model.value, item);
  }

  if (props.mode === 'single') {
    model.value = item;
  }
}
</script>

<template>
  <DefaultBlock class="ItemsPicker">
    <button
      v-for="item in items"
      :key="item.id"
      class="ItemsPicker__item"
      :class="{ ItemsPicker__item_active: isActive(item), }"
      @click="update(item)"
    >
      {{ item.name }}
    </button>
  </DefaultBlock>
</template>

<style scoped>
.ItemsPicker {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 8px;
}

.ItemsPicker__item {
  display: inline-block;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: 4px solid;
  padding: 4px;
  cursor: pointer;
}

.ItemsPicker__item_active {
  color: #fff;
  background: #000;
  border-color: #000;
}
</style>
