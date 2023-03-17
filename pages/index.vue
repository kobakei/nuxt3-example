<template>
  <div>
    <HelloWorld />

    <RedWorld />

    <p>
      {{ $hello('Plugin') }}
    </p>

    <p>
      {{ store.count }}
      <button @click="store.increment()">click</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'
import RedWorld from '~/components/global/RedWorld.vue'

const store = useCounterStore()
const { $hello } = useNuxtApp()
</script>
