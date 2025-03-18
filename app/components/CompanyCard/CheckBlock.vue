<template>
  <div class="flex items-center justify-center gap-[4px]">
    <UIcon :name="props.iconName" class="size-5 text-[#337566]" />
    <div>{{ props.text }}</div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  iconName: string
  text: string
}
const props = defineProps<Props>()
</script>

<style scoped></style>
