<template>
  <div>
    <div><h1>Thank You for Your Registration</h1></div>
    <div class="containers">
      <div class="wrapper-input">
        <div class="form-input">
          <div class="title">Name</div>
          <div class="input">{{data.name}}</div>
        </div>
        <div class="form-input">
          <div class="title">Email</div>
          <div class="input">{{data.email}}</div>
        </div>
        <div class="form-input">
          <div class="title">Phone</div>
          <div class="input">{{data.phone}}</div>
        </div>
        <div class="form-input">
          <div class="title">Adress</div>
          <div class="input">{{data.address}}</div>
        </div>
        <div class="form-input">
          <div class="title">Invoice</div>
          <div class="input">{{this.generetInvoice(6)}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    data: {}
  }),
  methods: {
    ...mapState([
      'dataForm'
    ]),
    generetInvoice (length) {
      var result = ''
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      var charactersLength = characters.length
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
      }
      return result
    },
    addData () {
      this.data = this.$store.state.dataForm
    }
  },
  mounted () {
    this.addData()
  }
}
</script>
<style lang="less" scoped>
.containers {
  width: 100%;
  text-align: center;
  height: 100vh;
}
.wrapper-input {
  width: 400px;
  display: inline-block;
  min-height: 400px;
  margin-top: 120px;
  border: solid 1px black;
  padding: 20px;
  div {
    position: relative;
    display: inline-block;
    text-align: left;
    width: 100%;
  }
}
</style>
