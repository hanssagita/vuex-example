import * as api from '@/api';

const state = {
  planets: []
};
const mutations = {
  setPlanets(state, value) {
    state.planets = [...value];
  }
};
const actions = {
  getPlanets({ commit }, { success, fail } = {}) {
    api.getPlanets(
      (response) => {
        commit('setPlanets', response.data.results);
        success && success(response)
      },
      (response) => {
        fail && fail(response)
      }
    );
  }
};
const getters = {
  largePopulation (state) {
    return state.planets.filter(planet => planet.population > 1000)
  },
  smallPopulation (state) {
    return state.planets.filter(planet => planet.population <= 1000)
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
