<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <p>Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
    <h2>Attending</h2>
    <ul>
      <li v-for='(name, index) in attending' :key='index'>
        {{ name}}</li>
    </ul>
  </div>

</template>

<script>
import {computed, ref} from "vue";

export default {
  name: 'App',
  setup() {
    const capacity = ref(4);
    const attending = ref(["Tim", "Bob", "Joe"]);

    const spacesLeft = computed(()=> {
      return capacity.value - attending.value.length;
    })

    function increaseCapacity() {
      capacity.value++;
    }
    return { capacity, increaseCapacity, attending, spacesLeft };
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
li {
  list-style-type: none;
}
</style>
