import axios from './index'

export class AccountApi {
    constructor(axiosInstance) {
        this.axios = axiosInstance
    }

    signin(login, password) {
      return this.axios.post('/signin', { username: login, password })
    }

    login(login, password) {
      return this.axios.post('/login', { username: login, password }, {
        auth: {
          username: login,
          password: password
        }
      }).then(() => {
        const token = `${login}:${password}`;
        const encodedToken = btoa(token);
        axios.defaults.headers.common['Authorization'] = 'Basic ' + encodedToken
      })
    }
}

export default new AccountApi(axios)