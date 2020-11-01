<template>
  <div id="elemPage">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Elements Page" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld/HelloWorld.vue";

export default {
  name: "ElemPage",
  components: {
    HelloWorld
  }
};
</script>
