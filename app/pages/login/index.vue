<template>
  <div>
    <LoginForm />
  </div>
</template>

<script lang="ts" setup>
import { definePageMeta } from '#imports'
import LoginForm from '~/components/LoginForm'

definePageMeta({
  layout: false
})

</script>

<style scoped>

</style>