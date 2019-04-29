<template>
    <div>
        <v-snackbar
        :value="snackbar"
        :color="color"
        :timeout="timeout"
      >
        {{ text }}
        <v-btn
          dark
          flat
          @click="showNotifSnack({status:false, color: '', text: ''})"
        >
          Close
        </v-btn>
      </v-snackbar>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      timeout: 6000
    }
  },
  computed: {
    ...mapState([
      'snackbar',
      'color',
      'text'
    ])
  },
  methods: {
    ...mapMutations([
      'showNotifSnack'
    ])
  }
}
</script>
