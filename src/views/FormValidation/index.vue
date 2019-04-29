<template>
  <div>
    <div class="containers">
      <div class="wrapper-input">
        <div class="form-input">
          <div class="title">Name</div>
          <div class="input"><input v-model="data.name" type="text" placeholder="Name"></div>
        </div>
        <div class="form-input">
          <div class="title">Email</div>
          <div class="input"><input v-model="data.email" type="Email" placeholder="Email"></div>
        </div>
        <div class="form-input">
          <div class="title">Phone</div>
          <div class="input">
            <select class="phone-select">
              <option>+62</option>
              <option>+61</option>
              <option>+60</option>
            </select>
            <input class="phone" v-model="data.phone" type="number" placeholder="Phone"></div>
        </div>
        <div class="form-input">
          <div class="title">Address</div>
          <div class="input"><input v-model="data.address" type="text" placeholder="Address"></div>
        </div>
        <div class="form-input">
          <div class="title">Subcribe Newsletter</div>
          <div class="input"><input type="checkbox" placeholder="Newsletter" checked></div>
        </div>
        <div class="btn-submit">
          <div v-if="Object.keys(this.data).length > 2" class="btn-click" @click="submitData">Submit</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data: () => ({
    data: {}
  }),
  methods: {
    ...mapMutations([
      'showNotifSnack',
      'setDataForm'
    ]),
    submitData () {
      if (Object.keys(this.data).length !== 0) {
        if (this.validationForm(this.data)) {
          this.setDataForm(this.data)
          this.$router.push('/succes')
          this.showNotifSnack({ status: true, color: '#07BC4C', text: 'Nice' })
        }
      } else {
        this.showNotifSnack({ status: true, color: 'red', text: 'Isi from terlebih dahulu' })
      }
    },
    validationForm (data) {
      var valueData = true
      console.log(data.name.length)
      if (data.name.length < 5) {
        valueData = false
        this.showNotifSnack({ status: true, color: 'red', text: 'Nama kurang dari 5 character' })
      } else if (!this.ValidasiEmail(data.email)) {
        valueData = false
        this.showNotifSnack({ status: true, color: 'red', text: 'Email tidak valid' })
      } else if (data.phone.length < 1) {
        valueData = false
        this.showNotifSnack({ status: true, color: 'red', text: 'nomor yang anda masukan salah' })
      } else if (data.address) {
        if (data.address.length > 130) {
          valueData = false
          this.showNotifSnack({ status: true, color: 'red', text: 'Alamat lebih dari 130 character' })
        }
      }
      return valueData
    },
    ValidasiEmail (email) {
      if (email.split('@').length - 1 > 1) return false
      var regexEmail = /^([A-Z0-9._])+@([A-Z0-9-])/i
      var status = true
      if (regexEmail.test(email)) {
        status = true
      } else {
        status = false
      }
      return status
    }
  }
}
</script>

<style lang="less" scoped>
.containers {
  width: 100%;
  text-align: center;
  height: 100vh;
}
.btn-submit {
  width: 100%;
  margin-top: 30px;
  text-align: center !important;
  .btn-click {
    width: 120px;
    height: 40px;
    border-radius: 5px;
    background-color: aqua;
    color:black;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    font-weight: bold;
  }
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
.form-input {
  width: 100%;
  .title {
    margin-top: 20px;
  }
  .input {
    width: 100%;
    .phone-select {
      width: 10%;
      display: inline-block;
      float: left;
      border: solid 1px #ddd;
      height: 30px;
      padding: 0 5px;
      border-radius: 0;
    }
    .phone {
      width: 90%;
      display: inline-block;
      float: left;
    }
    input{
      border: solid 1px #d3d3d3;;
      border-radius: 3px;
      width: 100%;
      height: 30px;
      padding: 0 20px;
    }
  }
}
</style>
