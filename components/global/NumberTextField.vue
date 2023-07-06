<template>
  <v-text-field
    label="Number"
    :model-value="value"
    @update:model-value="onInput"
  />
</template>

<script lang="ts">
export default defineComponent({
  name: 'NumberTextField',
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    onInput(val: string | undefined) {
      this.$emit('update:modelValue', val)
    },
  },
})
</script>

<style scoped></style>
