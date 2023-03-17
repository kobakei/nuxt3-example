<template>
  <div>
    <p>
      {{ $hello('world') }}
    </p>

    <p>
      {{ store.count }}
      <button @click="store.increment()">click</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'

const store = useCounterStore()
const { $hello } = useNuxtApp()
</script>
