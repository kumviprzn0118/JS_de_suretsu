<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <h1 class="p-4 text-blue-900 font-bold bg-blue-100">{{ msg }}</h1>
</template>
