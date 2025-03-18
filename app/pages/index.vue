<template>
  <div>
    <h1>Главная страница</h1>
    <p>Добро пожаловать на главную страницу! Но, по идее, увидеть ее вы не должны.</p>
  </div>
</template>

<script lang="ts" setup>
import { definePageMeta } from '#imports'

definePageMeta({
  middleware: ['redirect'],
  layout: false
})
</script>

<style scoped></style>
