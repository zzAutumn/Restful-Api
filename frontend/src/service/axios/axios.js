const axios = require('axios')

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

var instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  responseType: 'json'
})


export default class $http {
    async get(url, data = {}) {
      const result = await instance.get(url, data)
      if (result.status == 200 ) {
        return result.data
      }
     }
  
     async post(url, data = {}) {
       const result = await instance.post(url, data)
        console.log(result)
     }  
}