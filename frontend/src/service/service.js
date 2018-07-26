const $http = require('./axios/axios')
import api from './api'

export default class Service {
  async signUp(data) {
    const result = $http.post(api.signup, data)
    if (result.status == 200) {
      this.$Notice.success({
        title: 'SignUp successfully'
      })
    }else {
      this.$Notice.error({
        title: 'SignUp failed'
      })
    }
  }
}