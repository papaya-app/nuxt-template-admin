// 用户信息管理
export const useUserStore = defineStore('user', () => {

  const isAuth = ref(false)

  return { isAuth }
})
