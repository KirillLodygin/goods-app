<template>
  <div class="min-h-screen flex flex-col">
    <header class="sticky top-0 z-10">
      <Header />
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="self-end w-full">
      <Footer />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import Footer from '~/components/Footer'
import Header from '~/components/Header'
</script>

<style scoped></style>
