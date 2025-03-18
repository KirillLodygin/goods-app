import { mount } from '@vue/test-utils'
import LoginForm from '~/components/LoginForm'

describe('LoginForm.vue', () => {
    it('renders login form correctly', () => {
        const wrapper = mount(LoginForm)

        expect(wrapper.find('h2').text()).toBe('Авторизация')
        expect(wrapper.find('input[placeholder="Ваш логин"]').exists()).toBe(true)
        expect(wrapper.find('input[placeholder="Ваш пароль"]').exists()).toBe(true)
        expect(wrapper.find('button').text()).toBe('Войти')
    })

    it('validates required fields', async () => {
        const wrapper = mount(LoginForm)

        await wrapper.find('button').trigger('submit')

        expect(wrapper.find('.v-input--error').exists()).toBe(true)
        expect(wrapper.find('input[placeholder="Ваш логин"]').attributes('aria-invalid')).toBe('true')
        expect(wrapper.find('input[placeholder="Ваш пароль"]').attributes('aria-invalid')).toBe('true')
    })

    it('validates password length', async () => {
        const wrapper = mount(LoginForm)

        await wrapper.setData({ login: 'testuser', password: '123' })
        await wrapper.find('button').trigger('submit')

        expect(wrapper.find('.v-input--error').exists()).toBe(true)
        expect(wrapper.find('input[placeholder="Ваш пароль"]').attributes('aria-invalid')).toBe('true')
    })

    it('submits the form successfully', async () => {
        jest.useFakeTimers()
        const wrapper = mount(LoginForm)

        await wrapper.setData({ login: 'testuser', password: '123456' })
        await wrapper.find('button').trigger('submit')

        jest.runAllTimers()

        expect(wrapper.vm.$toast.add).toHaveBeenCalledWith({
            title: 'Успех!',
            description: 'Вы успешно вошли.',
            color: 'success',
        })
    })
})
