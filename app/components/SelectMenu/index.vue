<template>
  <div :class="containerClasses">
    <UInputMenu
      v-model="value"
      value-key="id"
      color="neutral"
      variant="subtle"
      size="xl"
      trailing-icon="i-eva-arrow-down-fill"
      :ui="{
        trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200',
        label: 'font-inter font-medium text-[13px] leading-5 tracking-0% align-middle text-[#6B6B6B]',
      }"
      :content="{
        align: 'start',
        side: 'bottom',
        sideOffset: 5,
      }"
      arrow
      :loading="isLoading"
      :items="items"
      placeholder="Все товары и услуги"
      class="h-[104px] w-full"
      @update:modelValue="onSelectItem"
      @click="onClickListItem(item)"
    >
      <template #item-label="{ item }">
        <span class="font-inter font-normal text-[15px] leading-5 tracking-0% align-middle text-blackText">
          {{ `${item.label}` }}
        </span>

        <span
          v-if="item.quantity"
          class="font-inter font-normal text-[15px] leading-6 tracking-0% align-middle text-[#6B6B6B] ml-[8px]"
        >
          {{ `${item.quantity}` }}
        </span>
      </template>
    </UInputMenu>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useFetch } from 'nuxt/app'
import { useDevice } from '#imports'
import { computed } from 'vue'

const { isMobile } = useDevice()

const items = reactive<Array<Record<string, string | number>>>([])
const value = ref<Record<string, string | number> | null>(null)
const isLoading = ref<boolean>(false)

const onSelectItem = (selectedItem: Record<string, string | number>) => {
  value.value = selectedItem
}

const onClickListItem = (item: Record<string, string | number>) => {
  if (!Object.keys(value.value).length || value.value !== item) {
    value.value = item
  } else {
    value.value = {}
  }
}

try {
  isLoading.value = true
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const { data, error } = await useFetch('/api/goods_categories')
  if (data.value && data.value.body.length) {
    items.push(...data.value.body)
  }
  if (error.value) {
    const errorMessage = error.value.toString()
    throw new Error(errorMessage)
  }
  isLoading.value = false
} catch (err) {
  console.error('Ошибка при получении данных:', err.message || err)
}

const containerClasses = computed(() => {
  return isMobile
    ? 'w-[360px] h-[104px] mx-auto'
    : 'w-[438px] mx-auto'
})
</script>

<style scoped></style>
