import axios from './index'
import loginStore from '@/store/login'
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
        const encodedToken = btoa(token, 'base64');
        loginStore.token = encodedToken
        loginStore.isConnected = true
        axios.defaults.headers.common['Authorization'] = 'Basic ' + encodedToken
      })
    }

    logout() {
      loginStore.token = undefined
      loginStore.isConnected = false
    }
}

const accountApi = new AccountApi(axios)
export default  accountApi
