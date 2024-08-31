<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
import './assets/main.css'
</script>

<template>
  <div class="h-full">
    <header>
        <Header msg="Javascriptで漸化式を理解する" />
    </header>
  </div>
  <div class="flex flex-row h-full">
    <Navigation/>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
