<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="primary" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt3 example` : 'Nuxt 3 example'
  },
})
</script>
