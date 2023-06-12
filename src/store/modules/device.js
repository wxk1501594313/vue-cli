const device = {
  state: {
    code: ''
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    }
  },

  actions: {
    // 修改code
    updateCode({ commit }, deviceCode) {
      const code = deviceCode.trim()
      commit('SET_CODE', code)
    }

  }
}

export default device