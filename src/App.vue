<template>
  <div>
    <p>Spaces Left: {{ eventSpace.spacesLeft.value }} out of {{ eventSpace.capacity.value }}</p>
    <p>Capacity: {{ eventSpace.capacity.value }}</p>
    <button @click="eventSpace.increaseCapacity()">Increase Capacity</button>

    <h2>Attending</h2>
    <ul>
      <li v-for='(name, index) in eventSpace.attending.value' :key='index'>
        {{ name}}
      </li>
    </ul>

    <h2>Searching</h2>
    Search for <input v-model="searchInput" />
    <div>
      <p>Loading: {{ getEvents.loading.value }}</p>
      <p>Error: {{ getEvents.error.value }}</p>
      <p>Number of events: {{ getEvents.results.value }}</p>
    </div>
  </div>

</template>

<script>
import useEventSpace from "@/use/event-space";

import {onBeforeMount, onMounted, ref, watch } from "vue";
import getEventCount from "./api/event";
import usePromise from "./composables/use-promise";


export default {
  name: 'App',
  setup() {
    onBeforeMount(() => {
      console.log('Before Mount!');
    })
    onMounted(() => {
      console.log('Mounted!');
    })

    const searchInput = ref("");
    const getEvents = usePromise(search => getEventCount(search.value)
    );


    watch(searchInput, () => {
      if (searchInput.value !== "") {
        getEvents.createPromise(searchInput);
      } else {
        getEvents.results.value = null;
      }
    });

    const eventSpace = useEventSpace();

    return { eventSpace, searchInput, getEvents }
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
