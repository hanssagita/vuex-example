import * as api from '@/api';

const state = {
  people: []
};
const mutations = {
  setPeople(state, value) {
    state.people = [...value];
  }
};
const actions = {
  getPeople({ commit }, { success, fail } = {}) {
    api.getPeople(
      (response) => {
        commit('setPeople', response.data.results);
        success && success(response)
      },
      (response) => {
        fail && fail(response)
      }
    );
  }
};
const getters = {
  male (state) {
    return state.people.filter(person => person.gender === 'male') || []
  },
  female (state) {
    return state.people.filter(person => person.gender === 'female') || []
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
