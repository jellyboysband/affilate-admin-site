const state = {
  isLoading: false,
}

const mutations = {
  request_start (state) {
    state.isLoading = true
  },

  request_end (state) {
    state.isLoading = false
  },
}

const actions = {
  AJAX_REQUEST_START ({ commit }) {
    commit('request_start')
  },
  AJAX_REQUEST_END ({ commit }) {
    commit('request_end')
  },
}

export default {
  state,
  mutations,
  actions,
}
