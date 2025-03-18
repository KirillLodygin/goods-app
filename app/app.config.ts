export default defineAppConfig({
  // https://ui3.nuxt.dev/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'lightgray',
    },
    skeleton: {
      base: 'animate-pulse rounded-[calc(var(--ui-radius)*1.5)] bg-[#E8E8E8]'
    }
  }
})
