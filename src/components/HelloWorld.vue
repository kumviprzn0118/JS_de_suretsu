<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="p-4 mb-4 text-blue-900 font-bold bg-blue-100">{{ msg }}</h1>
  </div>
</template>

<style scoped>

</style>
