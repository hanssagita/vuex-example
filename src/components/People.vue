<template>
  <div class="people">
    <div class="title">All people</div>
    <div
        v-for="(person, idx) in people"
        :key="person.name"
        class="person">
        {{idx + 1}} - {{person.name}} - {{person.gender}}
    </div>
    <div class="title">Male people</div>
    <div
        v-for="(person, idx) in male"
        :key="person.name"
        class="person">
      {{idx + 1}} - {{person.name}} - {{person.gender}}
    </div>
    <div class="title">Female people</div>
    <div
        v-for="(person, idx) in female"
        :key="person.name"
        class="person">
      {{idx + 1}} - {{person.name}} - {{person.gender}}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
export default {
  name: "People",
  created () {
    this.getPeople()
  },
  computed: {
    ...mapState('people', ['people']),
    ...mapGetters('people', ['male', 'female']),
  },
  methods: {
    ...mapActions('people', ['getPeople']),
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
