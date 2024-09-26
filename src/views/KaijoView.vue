<script setup lang="ts">
import ThePageSection from '../components/ThePageSection.vue'
</script>
<template>
  <div class="ml-4">
      <ThePageSection msg="再帰関数の基礎（階乗）"/>
  <p>
    function kaijo(n){<br>
      &nbsp;if(n!==0){<br>
        &nbsp;&nbsp;return n*kaijo(n-1)<br>
        &nbsp;}else{<br>
          &nbsp;&nbsp;return 1<br>
          &nbsp;}<br>
          &nbsp;}<br>
          &nbsp;let test1 = kaijo(5)<br>
          &nbsp;console.log(test1)<br>
  </p>
  </div>
</template>

<style>
</style>
