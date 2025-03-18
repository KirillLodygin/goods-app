<template>
  <div>
    <CompanyCard />
    <USeparator type="solid" color="neutral" />
    <SelectMenu />
    <GoodsBlock />
  </div>
</template>

<script lang="ts" setup>
import { definePageMeta } from '#imports'
import CompanyCard from '~/components/CompanyCard'
import SelectMenu from '~/components/SelectMenu'
import GoodsBlock from '~/components/GoodsBlock'

definePageMeta({
  middleware: ['auth'],
})
</script>

<style scoped></style>
