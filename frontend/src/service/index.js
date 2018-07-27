// import $http from './axios/axios'
import Service from './service'

const service = {
  install (Vue) {
    Vue.prototype.$service = new Service()
  }
}

export default service
