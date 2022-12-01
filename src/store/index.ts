import { createStore } from 'vuex'

export default createStore({
  state: {
    IsAuthenticated : false,
    token:'',
    // accessToken:'',
    // refreshToken:'',
  },
  getters: {
  },
  mutations: {
    onStart(state){
      const token =  localStorage.getItem("token")
      if (token){
        state.IsAuthenticated = true
        state.token = token
      } else {
        state.IsAuthenticated = false
        state.token = ''
      }

    },
    login(state, token){
      if (token){
        state.IsAuthenticated = true
        state.token = token
        localStorage.setItem("token",token)
      } else {
        state.IsAuthenticated = false
        state.token = ''
        localStorage.removeItem("token")
      }

    },
    logout(state){
        state.IsAuthenticated = false
        state.token = ''
        localStorage.removeItem("token")
    },

  },
  actions: {
  },
  modules: {
  }
})
