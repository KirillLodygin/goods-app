<template>
  <div class="w-full h-[64px] flex justify-between font-semibold text-sm leading-6 bg-yellow-50 p-2 pl-4 pr-8">
    <div class="flex items-center gap-x-9">
      <UIcon  v-if="isMobile" name="i-ci-hamburger-md" class="w-[40px] h-[40px] mr-[92px]" />
      <ClientOnly>
        <NuxtImg src="/annonce.png" alt="logo" width="123" height="23" loading="lazy" fit="contain" />
      </ClientOnly>
      <div v-if="isMobile" class='ml=[36px]'>
        <UChip :text="1" size="3xl" inset color="primary">
          <UIcon name="i-ion-bag-outline" class="w-[30px] h-[30px]" />
        </UChip>
      </div>
      <UButton
        v-if="isDesktop"
        icon="i-akar-icons-grid"
        label="Все категории"
        class="w-[167px] h-[48px] flex items-center justify-center rounded-full text-black bg-gray-200 hover:bg-[#CFCFCF]"
      />
    </div>
    <div v-if="isDesktop" class="flex items-center gap-[24px]">
      <div class="flex items-center justify-start h-[32px]pl-6 pr-6 gap-[4px]">
        <UIcon name="i-bi-geo-alt-fill" class="size-3" />
        <div class="text-base font-normal leading-6 text-black">Ростов-на-Дону</div>
      </div>
      <USeparator orientation="vertical" class="bg-[#CCCCCC] h-[32px]" />
      <div class="px-3 py-2 text-[#337566] font-inter font-medium">Разместить объявление</div>
      <div
        class="flex items-center justify-start w-[88px] h-[48px] pt-[4px] pr-[4px] pb-[4px] pl-[12px] gap-[8px] rounded-full bg-gray-200"
      >
        <UIcon name="i-ci-hamburger-md" class="w-6 h-6" />
        <UChip inset>
          <UAvatar
            icon="i-fluent-emoji-high-contrast-man"
            size="lg"
            alt="Benjamin Canac"
            class="border-black border-[1px]"
          />
        </UChip>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDevice } from '#imports'

const { isDesktop, isMobile } = useDevice()
</script>

<style scoped></style>
