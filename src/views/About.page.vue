<template>
  <div class="homePage">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="THIS IS ABOUT PAGE" />
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
