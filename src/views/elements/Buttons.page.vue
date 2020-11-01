<template>
  <div id="buttonsPage">
    <HelloWorld msg="Buttons Super Page" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld/HelloWorld.vue";

export default {
  name: "ButtonsPage",
  components: {
    HelloWorld
  }
};
</script>
