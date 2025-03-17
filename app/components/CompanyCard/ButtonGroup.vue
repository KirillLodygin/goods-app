<template>
  <div class="flex items-center justify-start gap-3 text-sm text-gray-800">
    <UButton
      v-for="(button, index) in buttons"
      :key="index"
      :class="{ border: button.isChecked }"
      class="bg-[#E8E8E8] hover:bg-[#CFCFCF] rounded-xl flex items-center gap-1 transition-all duration-200 ease-in-out text-black transition-colors"
      @click="handleClick(button)"
    >
      {{ button.label }}
      <span class="text-gray-400">{{ button.indicators }}</span>
    </UButton>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { navigateTo } from 'nuxt/app'

type TButton = {
  label: string
  indicators: number | ''
  isChecked: boolean
  path: string
}

// Набор кнопок в стандартной ситуации должен браться с внешнего ресурса и не храниться в компоненте
const buttons = reactive<Array<TButton>>([
  {
    label: 'Товары и услуги',
    indicators: '',
    isChecked: true,
    path: '#',
  },
  {
    label: 'Агенты',
    indicators: 5,
    isChecked: false,
    path: '#',
  },
  {
    label: 'О компании',
    indicators: '',
    isChecked: false,
    path: '#',
  },
])

const handleClick = (currentButton: TButton) => {
  if (currentButton.isChecked) return

  buttons.forEach((button) => {
    button.isChecked = button.label === currentButton.label
  })

  navigateTo(currentButton.path)
}
</script>

<style scoped>
</style>
