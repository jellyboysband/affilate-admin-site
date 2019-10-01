import Axios from 'axios';

const state = {
  status: '',
  token: localStorage.getItem('token') || '',
};

const mutations = {
  auth_request(state) {
    state.status = 'loading';
  },

  auth_success(state, token) {
    state.status = 'success';
    state.token = token;
  },

  auth_error(state) {
    state.status = 'error';
  },

  logout(state) {
    window.localStorage.removeItem('token');
    delete Axios.defaults.headers.common['token'];
    state.status = '';
    state.token = '';
  },
};

const actions = {
  login({ commit }, { password }) {
    return new Promise((resolve, reject) => {
      commit('auth_request');
      Axios.post(
        `${window.env.API_URL}/admin/login`,
        {
          password,
        },
        {}
      )
        .then(response => {
          const token = response.data.token;
          window.localStorage.setItem('token', token);

          Axios.defaults.headers.common['token'] = token;

          commit('auth_success', token);

          resolve(response);
        })
        .catch(err => {
          commit('auth_error');
          window.localStorage.removeItem('token');
          reject(err);
        });
    });
  },

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout');
      window.location.reload();
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
