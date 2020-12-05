<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <p>Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
    <h2>Attending</h2>
    <ul>
      <li v-for='(name, index) in attending' :key='index'>
        {{ name}}
      </li>
    </ul>
  </div>

</template>

<script>
import useEventSpace from "@/use/event-space";
import {onBeforeMount, onMounted} from "vue";

export default {
  name: 'App',
  setup() {
    onBeforeMount(() => {
      console.log('Before Mount!');
    })
    onMounted(() => {
      console.log('Mounted!');
    })
    const { capacity, attending, spacesLeft, increaseCapacity } = useEventSpace();

    return { capacity, attending, spacesLeft, increaseCapacity }
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
