<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <div class="dropDown">
        <router-link to="/elements" class="dropTrigger">Elements</router-link>
        <div class="dropDownItems">
          <router-link to="/elements/buttons">Buttons</router-link>
          <router-link to="/elements/inputs">Inputs</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1em;

  .dropDown {
    display: flex;
    flex-direction: column;

    .dropDownItems {
      display: flex;
      flex-direction: column;
    }
  }
  
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
