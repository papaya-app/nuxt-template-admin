
interface NavMenu {

  children: NavMenu[]
}

// 导航菜单管理
export const useNavMenusStore = defineStore('navMenusStore', () => {

  const menus = ref<NavMenu[]>([])

  return { menus }
})
