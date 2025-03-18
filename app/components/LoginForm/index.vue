<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
      <h2 class="mb-4 text-2xl font-bold text-center">Авторизация</h2>

      <UForm :schema="v.safeParser(schema)" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormField label="Логин" name="login" required>
          <UInput v-model="state.login" placeholder="Ваш логин" class="w-full" />
        </UFormField>

        <UFormField label="Пароль" name="password" required>
          <UInput v-model="state.password" type="password" placeholder="Ваш пароль" class="w-full" />
        </UFormField>

        <UButton
          type="submit"
          label="Войти"
          size="lg"
          variant="outline"
          active-color="primary"
          active-variant="solid"
          loading-auto
        />
      </UForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '#imports'
import { reactive } from 'vue'
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'
import Cookies from 'js-cookie'
import { navigateTo } from 'nuxt/app'

const schema = v.object({
  login: v.pipe(v.string(), v.required('Логин обязателен для заполнения')),
  password: v.pipe(
    v.string(),
    v.required('Пароль обязателен для заполнения'),
    v.minLength(6, 'Пароль должен содержать минимум 6 символов'),
  ),
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  login: '',
  password: '',
})

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const token = 'fake-token'

    Cookies.set('token', token, { expires: 7 })

    toast.add({ title: 'Успех!', description: 'Вы успешно вошли.', color: 'success' })

    navigateTo('/products')
  } catch (error) {
    toast.add({ title: 'Ошибка!', description: error.message, color: 'danger' })
  }
}
</script>

<style scoped></style>
