<template>
  <div>Capacity: {{ capacity }}</div>

</template>

<script>
import {ref} from "vue";

export default {
  name: 'App',
  setup() {
    const capacity = ref(3);

    return { capacity };
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
