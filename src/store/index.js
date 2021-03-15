import Vue from 'vue';
import Vuex from 'vuex';
import people from './module/people';
import planets from './module/planets';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    people,
    planets
  }
});

export default store;
