<template>
  <div id="app" class="container-fluid">
    <router-view/>
  </div>
</template>

<style>
html,body,#app {
  height: 100%;
}

#app {
  font-family: "Consolas", "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  background-image: url('../src/assets/mainBackgroundImg.jpg');
  background-size: cover;
  overflow: auto;
  text-align: center;
  color: #2c3e50;
}
</style>