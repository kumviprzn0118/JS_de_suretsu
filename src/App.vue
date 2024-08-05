<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Javascriptで漸化式を理解する" />
    </div>
  </header>
  <nav>
    <RouterLink to="/about">階乗（f(n)=n×(n-1)…×2×1）</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>

</style>
