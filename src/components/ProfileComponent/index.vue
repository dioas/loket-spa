<template>
  <v-layout wrap align-center>
    <div class="text-xs-center" v-if="!this.setProfile.name">
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    <v-flex xs12 sm6 v-if="this.setProfile.name">
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{this.setProfile.name}}</h3>
          </div>
        </v-card-title>
        <v-card-title>
          <div class="title">
            <div><b>height: {{this.setProfile.height}} </b></div>
            <div><b>mass:  {{this.setProfile.mass}}</b></div>
            <div><b>hair color:  {{this.setProfile.hair_color}}</b></div>
            <div><b>skin color:  {{this.setProfile.skin_color}}</b></div>
            <div><b>birth year:  {{this.setProfile.birth_year}}</b></div>
            <div><b>gender:  {{this.setProfile.gender}}</b></div>
            <div><b>Has {{this.setProfile.films.length}} Films</b></div>
            <div><b>Has {{this.setProfile.vehicles.length}} vehicles</b></div>
            <div><b>Has {{this.setProfile.starships.length}} starships</b></div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'film',
  data: () => ({
  }),
  computed: {
    ...mapState([
      'setProfile',
      'tempData'
    ])
  },
  methods: {
    ...mapActions([
      'getAllPeopleProfile'
    ]),
    loadData () {
      var url = window.location.href
      var getId = url.split('/')[4]
      console.log(getId)
      this.getAllPeopleProfile(getId)
    }
  },
  mounted () {
    this.loadData()
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
