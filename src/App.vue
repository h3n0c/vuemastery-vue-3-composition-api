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
import {computed, reactive, toRefs} from "vue";

export default {
  name: 'App',
  setup() {
    const event = reactive({
      capacity: 4,
      attending: ["Tim", "Bob", "Joe"],
      spacesLeft: computed(()=> {
        return event.capacity - event.attending.length;
      })
    });

    function increaseCapacity() {
      event.capacity++;
    }
    return { ...toRefs(event), increaseCapacity};
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
