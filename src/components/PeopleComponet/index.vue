<template>
  <v-layout wrap align-center>
    <div class="text-xs-center" v-if="this.showPeople.length === 0">
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    <v-flex xs12 sm4 v-for="(data, key) in this.showPeople" :key="key" >
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{data.name}}</h3>
          </div>
        </v-card-title>
        <v-card-title>
          <div class="title">
            <div><b>height: {{data.height}} </b></div>
            <div><b>mass:  {{data.mass}}</b></div>
            <div><b>hair color:  {{data.hair_color}}</b></div>
            <div><b>skin color:  {{data.skin_color}}</b></div>
            <div><b>birth year:  {{data.birth_year}}</b></div>
            <div><b>gender:  {{data.gender}}</b></div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat :to="{ name: 'peopleId', params: { id: getId(data.url) }}" color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <div class="loadmore" v-if="this.tempData.next !== null && this.showPeople.length !== 0">
      <v-btn
        :loading="loading"
        :disabled="loading"
        color="blue-grey"
        class="white--text"
        @click.native="loader = 'loading'"
        @click="nextPpl()"
      >Loadmore</v-btn>
    </div>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'film',
  data: () => ({
    loader: null,
    loading: false,
    count: 1,
    loadingData: false
  }),
  computed: {
    ...mapState([
      'showPeople',
      'tempData'
    ])
  },
  methods: {
    ...mapActions([
      'getAllData',
      'getAllPeople',
      'getNext'
    ]),
    getId (data) {
      var getId = data.split('/')[5]
      // console.log(data)
      return getId
    },
    nextPpl () {
      this.count = this.count + 1
      this.getNext(this.count)
      this.$router.push('/people?page=' + this.count)
      this.loadingData = true
    }
  },
  mounted () {
    this.getAllPeople()
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
