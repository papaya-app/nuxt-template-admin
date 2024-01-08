interface Tab {
  path: string
}

// 全局标签页管理
export const useTabsStore = defineStore('tabs', () => {
  const tabs = ref<Tab[]>()

  const currentTab = ref<Tab>()

  return { tabs, currentTab }
})
