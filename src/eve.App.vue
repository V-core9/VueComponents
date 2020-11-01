<template>
  <div>
    <button v-on:click="addComponent">Add</button>
    <button v-on:click="closeAllContainers">Close All Containers</button>
    <RdsContainer
      v-for="index in editors"
      :key="index"
      v-bind:id="index.id"
      v-bind:title="index.title"
      v-bind:subtitle="index.subtitle"
      v-bind:content="index.content"
      v-on:clicked="closeRdsContainer"
    />
  </div>
</template>

<script>
import RdsContainer from "./components/RdsContainer/RdsContainer.vue";

export default {
  data() {
    return {
      editors: []
    };
  },
  components: {
    RdsContainer
  },
  methods: {
    addComponent() {
      var d = new Date();
      var n = d.getTime();
      var newEditor = {
        id: parseInt(n),
        title: "Demo Title Example",
        subtitle: "Demo subtitle yeaaa",
        content:
          "Yo Yo Many things will be going inside of this spaceYo Yo Many things will be going inside of this spaceYo Yo Many things will be going inside of this space"
      };
      this.editors.push(newEditor);
    },
    closeRdsContainer(id) {
      console.log("closing container  " + id);
      this.editors = this.editors.filter(single => single.id !== id);
    },
    closeAllContainers() {
      this.editors = [];
      //this.editors.forEach(function myFunction(item) {
      //              item.title = "YEEAAAAAA";
      //            });
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: monospace;
}
</style>
