<template>
  <div>
    <p>User {{ $route.params.id }}</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['sample'],
})
</script>
