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
        <Header msg="Javascript×アルゴリズム" />
    </header>
  </div>
  <div class="md:flex flex-row h-screen">
    <Navigation/>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
