<template>
  <div class="planets">
    <div class="title">All Planets</div>
    <div
        v-for="(planet, idx) in planets"
        :key="planet.name"
        class="person">
      {{idx + 1}} - {{planet.name}} - {{planet.population}}
    </div>
    <div class="title">All Large Population</div>
    <div
        v-for="(planet, idx) in largePopulation"
        :key="planet.name"
        class="person">
      {{idx + 1}} - {{planet.name}} - {{planet.population}}
    </div>
    <div class="title">All Small Population</div>
    <div
        v-for="(planet, idx) in smallPopulation"
        :key="planet.name"
        class="person">
      {{idx + 1}} - {{planet.name}} - {{planet.population}}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
export default {
  name: "Planets",
  created () {
    this.getPlanets()
  },
  computed: {
    ...mapState('planets', ['planets']),
    ...mapGetters('planets', ['largePopulation', 'smallPopulation']),
  },
  methods: {
    ...mapActions('planets', ['getPlanets']),
  }
}
</script>

<style scoped>
.title {
  width: 200px;
  text-align: center;
  margin: 16px auto 4px auto;
  border-bottom: 1px solid #0095da;
}
</style>
