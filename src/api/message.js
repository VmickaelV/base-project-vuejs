import axios from './index'

export class MessageApi {
    constructor(axiosInstance) {
        this.axios = axiosInstance
    }

    get(page = 1, size = 20) {
      return this.axios.get('/api/messages',  { page, size })
    }

    send(message) {
      return this.axios.post('/api/messages', { message })
    }
}

export default new MessageApi(axios)