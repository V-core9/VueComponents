<template>
  <div class="numberInput">
    {{ this.value }}
    <input type="text" v-model="value" /><button @click="clearVal">X</button>
  </div>
</template>

<script>
export default {
  name: "NumberInput",
  props: {
    msg: String
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    clearVal() {
      this.value = "";
    },
    updateVal(val) {
      this.value = val;
    }
  },
  created() {
    this.value = this.msg;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
