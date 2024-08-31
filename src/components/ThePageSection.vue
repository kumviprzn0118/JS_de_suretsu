<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <h1 class="text-[36px]">{{ msg }}</h1>
</template>
