import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      data: {},
    }
  },
  mutations: {
    weatherData (state, action) {
      state.data = action
    },
  },
  
})

export default store;