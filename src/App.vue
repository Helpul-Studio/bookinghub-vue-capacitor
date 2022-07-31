<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {App as CapacitorApp} from '@capacitor/app'

CapacitorApp.addListener('backButton', ({canGoBack}) => {
    if(!canGoBack){
        CapacitorApp.exitApp();
    } else {
        window.history.back();
    }
})
</script>

<template>
  <router-view />

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
