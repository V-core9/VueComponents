<template>
  <div class="homePage">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App Components" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld/HelloWorld.vue";

export default {
  name: "HomePage",
  components: {
    HelloWorld
  }
};
</script>
