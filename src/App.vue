<template>
  <div id='app'>
    <div class="tabs">
      <div
          :class="['tab', {'selected': isPeople}]"
          @click="changeTab('PEOPLE')">People</div>
      <div
          :class="['tab', {'selected': isPlanets}]"
          @click="changeTab('PLANETS')">Planets</div>
    </div>
    <People v-if="isPeople" />
    <Planets v-if="isPlanets" />
  </div>
</template>

<script>
const People  = () => import('./components/People')
const Planets  = () => import('./components/Planets')
export default {
  name: 'App',
  data () {
    return {
      selectedTab: 'PEOPLE'
    }
  },
  components: {
    People,
    Planets
  },
  computed: {
    isPeople () {
      return this.selectedTab === 'PEOPLE'
    },
    isPlanets () {
      return this.selectedTab === 'PLANETS'
    }
  },
  methods: {
    changeTab (value) {
      this.selectedTab = value
    }
  }
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tabs {
  display: flex;
  justify-content: center;
}
.tabs .tab {
  width: 80px;
  padding: 8px;
  margin: 8px;
  cursor: pointer;
}
.selected {
  border-bottom: 1px solid #0095da;
  color: #0095da;
}
</style>
