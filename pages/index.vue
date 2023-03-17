<template>
  <v-container>
    <v-btn color="primary">Button</v-btn>

    <p>
      <v-icon>$mdiAccount</v-icon>
      This is icon
    </p>

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

    <p>
      <NuxtLink :to="localePath('/terms')">terms</NuxtLink>
    </p>
    <p>
      <NuxtLink :to="localePath('/privacy')">privacy</NuxtLink>
    </p>
    <p>
      <NuxtLink :to="localePath('/users/1')">users/1</NuxtLink>
    </p>
    <p>
      <NuxtLink :to="localePath('/users/123')">users/123</NuxtLink>
    </p>

    <NuxtLink :to="switchLocalePath('ja')">日本語</NuxtLink>
    <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
  </v-container>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'
import RedWorld from '~/components/global/RedWorld.vue'
import { concat } from '../utils/concat'

const store = useCounterStore()
const { $hello } = useNuxtApp()
const switchLocalePath = useSwitchLocalePath()
</script>
