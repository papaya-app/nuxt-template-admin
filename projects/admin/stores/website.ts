export const useWebsiteStore = defineStore('websiteStore', {
  state: () => ({
    name: '123',
    description: ''
  }),
  actions: {
    setName(value: string) {
      this.name = value
    }
  }
})
