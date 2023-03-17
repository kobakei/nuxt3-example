<template>
  <v-container>
    <h1>Privacy policy</h1>

    <v-text-field />

    <v-textarea />

    <v-alert type='info'>This is alert</v-alert>

    <NumberTextField v-model="number" />

    <p>
      number is {{ number }}
    </p>
  </v-container>
</template>

<script lang="ts">
// Options APIのコンポーネントが動くか検証
interface Data {
  number: number
}

export default defineComponent({
  name: 'Privacy',
  data(): Data {
    return {
      number: 0,
    }
  },
})
</script>

<style scoped></style>
