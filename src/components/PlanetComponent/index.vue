<template>
  <v-layout wrap align-center>
    <div class="text-xs-center" v-if="this.setPlanet.length === 0">
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    <v-flex xs12 sm4 v-for="(data, key) in this.setPlanet" :key="key">
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{data.name}}</h3>
          </div>
        </v-card-title>
        <v-card-title>
          <div class="title">
            <div><b>rotation period: {{data.rotation_period}} </b></div>
            <div><b>orbital period:  {{data.orbital_period}}</b></div>
            <div><b>diameter:  {{data.diameter}}</b></div>
            <div><b>climate:  {{data.climate}}</b></div>
            <div><b>gravity:  {{data.gravity}}</b></div>
            <div><b>terrain:  {{data.terrain}}</b></div>
            <div><b>surface water:  {{data.surface_water}}</b></div>
            <div><b>population:  {{data.population}}</b></div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'planet',
  data: () => ({
  }),
  computed: {
    ...mapState([
      'setPlanet',
      'tempData'
    ])
  },
  methods: {
    ...mapActions([
      'getAllPlanet'
    ])
  },
  mounted () {
    this.getAllPlanet()
  }
}
</script>
<style lang="less" scoped>
.title {
  div {
    width: 100%;
    display: inline-block;
    text-align: left;
    font-size: 14px;
  }
}
.opening {
  width: 100%;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}
</style>
