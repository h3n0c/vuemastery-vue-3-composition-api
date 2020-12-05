<template>
  <div>
    <p>Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>

</template>

<script>
import {ref} from "vue";

export default {
  name: 'App',
  setup() {
    const capacity = ref(3);

    function increaseCapacity() {
      capacity.value++;
    }
    return { capacity, increaseCapacity };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
