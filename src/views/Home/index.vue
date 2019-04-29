<template>
  <div class="home">
    <h1>Welcome to our Star Wars</h1>
    <h2>Choose your Favorite</h2>
    <div>
      <v-container grid-list-md text-xs-center>
        <v-layout wrap align-center>
          <v-flex xs12 sm3 d-flex>
            <v-select
              :items="items"
              label="Films"
              solo
              v-model="pickModel"
              @change="changePlanet(pickModel)"

            ></v-select>
          </v-flex>
        </v-layout>
        <transition name="slide-x-reverse-transition" >
            <router-view></router-view>
        </transition>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    items: ['people', 'planets', 'films'],
    pickModel: ''
  }),
  components: {
  },
  methods: {
    changePlanet (model) {
      if (model === 'people') {
        this.$router.push('/people')
      } else if (model === 'film') {
        this.$router.push('/film')
      } else {
        this.$router.push('/planet')
      }
    }
  }
}
</script>
