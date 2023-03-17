<template>
  <div>
    <p>User {{ $route.params.id }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

definePageMeta({
  middleware: ['sample'],
})

useHead({
  title: `User #${route.params.id}`,
  meta: [{ name: 'description', content: 'My amazing site.' }],
  bodyAttrs: {
    class: 'test',
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
})
</script>
