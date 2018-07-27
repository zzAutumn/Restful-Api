import api from './api'
import $http from './axios/axios'

export default class Service {
  async signUp (data) {
    const result = await $http.post(api.signup, data)
    return result
  }

  async login (data) {
    const result = await $http.post(api.login, data)
    return result
  }
}
