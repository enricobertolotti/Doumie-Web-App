<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// Add some global variables (colors, fonts)
:root {
  ///////// COLORS
  // Dark Colors
  --dark-bg-color: #0e1428;

  // Light Mode Colors
  --light-bg-color: #efefef;
}

#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);

  background-color: #2c3e50;

  width: 100wh;
  height: 100vh;
}
</style>
