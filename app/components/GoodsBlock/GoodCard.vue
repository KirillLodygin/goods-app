<template>
  <div class="w-full h-auto p-4 flex flex-col items-start justify-start">
    <div class="w-full h-auto mb-[16px]">
      <USkeleton v-if="loading" class="w-full h-auto min-h-[300px] rounded-lg" />
      <ClientOnly class="w-full h-full">
        <NuxtImg :src="imgPath" alt="logo" fit="contain" @load="onImageLoad" class="w-full h-auto rounded-lg" />
      </ClientOnly>
    </div>

    <div class="font-inter font-medium text-[17px] leading-tight mb-[12px]">{{ cost }}</div>
    <div
      class="w-full font-inter font-medium text-[15px] leading-loose mb-3 truncate whitespace-nowrap overflow-hidden"
    >
      {{ info }}
    </div>

    <USeparator color="neutral" />

    <div class="w-full h-16">
      <div
        v-if="isProgressing || isHidden"
        class="w-full h-16 flex items-center justify-center font-inter font-normal text-sm text-center align-middle"
      >
        <div class="text-[#337566]" v-if="isProgressing">Объявление продвигается</div>
        <div class="text-[#BD3223]" v-else>Объявление скрыто</div>
      </div>
      <div v-else class="w-full h-16 flex items-center justify-between">
        <div class="font-inter font-normal text-xs leading-4.5 tracking-normal align-middle not-italic">
          Увеличьте количество просмотров
        </div>
        <UButton
          label="Продвигать"
          class="text-[#F5F5F5] bg-[#337566] hover:bg-[#286054] w-[112px] h-[40px] rounded-lg flex items-center justify-center"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Props {
  imgPath: string
  isProgressing: boolean
  isHidden: boolean
  cost: string
  info: string
}
const props = defineProps<Props>()

const loading = ref(true)

const onImageLoad = () => {
  loading.value = false
}
</script>

<style scoped></style>
