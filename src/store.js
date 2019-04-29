import Vue from 'vue'
import Vuex from 'vuex'
import { Api } from '@/util/apiLibrary'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showFilm: [],
    tempData: {},
    showPeople: [],
    setProfile: {},
    setPlanet: [],
    snackbar: false,
    color: '',
    text: '',
    dataForm: {}
  },
  mutations: {
    setFilm (state, Data) {
      console.log(Data)
      state.showFilm = Data
    },
    tempData (state, data) {
      state.tempData = data
    },
    setPeople (state, Data) {
      state.showPeople = Data
    },
    setProfile (state, Data) {
      state.setProfile = Data
    },
    morePeople (state, data) {
      state.showPeople = data
    },
    setPlanet (state, data) {
      state.setPlanet = data
    },
    showNotifSnack (state, { status, color, text }) {
      state.snackbar = status
      state.color = color
      state.text = text
      if (status === true) {
        setTimeout(function () {
          state.snackbar = false
        },
        6000)
      }
    },
    setDataForm (state, data) {
      state.dataForm = data
    }
  },
  actions: {
    async getAllData ({ commit }) {
      Api('films').doRequest()
        .on('done', (res) => {
          console.log(res)
          commit('setFilm', res.body.results)
          commit('tempData', res.body)
        })
        .on('fail', (err) => {
          console.log(err)
        })
    },
    async getAllPeople ({ commit }) {
      Api('people').doRequest()
        .on('done', (res) => {
          console.log(res)
          commit('setPeople', res.body.results)
          commit('tempData', res.body)
        })
        .on('fail', (err) => {
          console.log(err)
        })
    },
    async getAllPeopleProfile ({ commit }, data) {
      console.log(data.toString())
      Api('userPeople').doRequest({ params: { userId: data.toString() } })
        .on('done', (res) => {
          console.log(res)
          commit('setProfile', res.body)
          commit('tempData', res.body)
        })
        .on('fail', (err) => {
          console.log(err)
        })
    },
    async getAllPlanet ({ commit }) {
      Api('planet').doRequest()
        .on('done', (res) => {
          commit('setPlanet', res.body.results)
          commit('tempData', res.body)
        })
        .on('fail', (err) => {
          console.log(err)
        })
    },
    async getNext ({ commit }, data) {
      Api('more').doRequest({ params: { page: data.toString() } })
        .on('done', (res) => {
          commit('morePeople', res.body.results)
        })
        .on('fail', (err) => {
          console.log(err)
        })
    }
  }
})
