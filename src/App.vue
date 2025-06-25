<script setup>
import { ref } from 'vue';

import UserItems from './components/UserItems.vue';
import SelectedItem from './components/SelectedItem.vue';
import ItemsPicker from './components/ItemsPicker.vue';

import { useData } from './composables/useData';

const [ itemsAvailable, itemsUser ] = useData();

const selectedUser = ref([]);
const selectedAvailable = ref({});
</script>

<template>
  <main class="app">
    <div class="app__row">
      <UserItems
        :selected="selectedUser"
        :count="itemsUser.length"
      ></UserItems>
      <SelectedItem
        :selected="selectedAvailable"
      ></SelectedItem>
    </div>
    <div class="app__row">
      <ItemsPicker
        mode="multiple"
        :items="itemsUser"
        v-model="selectedUser"
      ></ItemsPicker>
      <ItemsPicker
        mode="single"
        :items="itemsAvailable"
        v-model="selectedAvailable"
      ></ItemsPicker>
    </div>
  </main>
</template>

<style scoped>
.app {
  max-width: 600px;
  width: calc(100% - 40px);
  margin: auto;
  padding-top: 20px;
}

.app__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.app__row + .app__row {
  padding-top: 16px;
}
</style>
