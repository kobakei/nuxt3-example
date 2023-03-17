<template>
  <div>
    <HelloWorld />

    <RedWorld />

    <p>多言語化テスト: {{ $t('こんにちは') }}</p>

    <p>utilsテスト: {{ concat('こんにちは', '世界') }}</p>

    <p>
      {{ $hello('Plugin') }}
    </p>

    <p>
      {{ store.count }}
      <button @click="store.increment()">click</button>
    </p>

    <NuxtLink :to="switchLocalePath('ja')">日本語</NuxtLink>
    <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'
import RedWorld from '~/components/global/RedWorld.vue'
import { concat } from '../utils/concat'

const store = useCounterStore()
const { $hello } = useNuxtApp()
const switchLocalePath = useSwitchLocalePath()
</script>
