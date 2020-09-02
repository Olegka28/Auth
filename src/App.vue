<template>
  <div id="app">
    <Title />
    <div class="btn"><ButtonRegister /> <Home /></div>

    <router-view></router-view>
  </div>
</template>

<script>
import Title from './components/Title.vue';
import ButtonRegister from './components/ButtonRegister.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Title,
    ButtonRegister,
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10%;
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
}
.btn {
  position: absolute;
  right: 5%;
  top: 5%;
  float: right;
}
</style>
