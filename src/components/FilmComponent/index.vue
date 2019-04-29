<template>
  <v-layout wrap align-center>
    <div class="text-xs-center" v-if="this.showFilm.length === 0">
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    <v-flex xs12 sm4 v-for="(data, key) in this.showFilm" :key="key">
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{data.title}}</h3>
          </div>
        </v-card-title>
        <v-card-title>
          <div class="title">
            <div><b>Episode: {{data.episode_id}} </b></div>
            <div><b>director:  {{data.director}}</b></div>
            <div><b>producer:  {{data.producer}}</b></div>
            <div><b>release date:  {{data.release_date}}</b></div>
          </div>
          <div class="opening">Opening</div>
          <div>{{data.opening_crawl}}</div>
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
  name: 'film',
  data: () => ({
  }),
  computed: {
    ...mapState([
      'showFilm',
      'tempData'
    ])
  },
  methods: {
    ...mapActions([
      'getAllData',
      'getAllPeople'
    ])
  },
  mounted () {
    this.getAllData()
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
