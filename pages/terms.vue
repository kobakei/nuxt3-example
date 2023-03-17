<template>
  <div>
    <p>Terms</p>
  </div>
</template>

<script setup lang="ts">
await useAsyncData('key', () => $fetch('https://google.com'))
</script>
