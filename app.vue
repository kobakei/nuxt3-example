<template>
  <div>
    {{ store.count }}
    <button @click="store.increment()">click</button>
  </div>
</template>

<script lang="ts">

import {useCounterStore} from "~/stores/counter";

export default {
  data() {
    return {
      store: useCounterStore()
    }
  },
}
</script>