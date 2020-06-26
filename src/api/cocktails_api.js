import { axios } from './index'

export class CocktailApi {
    constructor(axiosInstance) {
        this.axios = axiosInstance
    }

    findAll() {
        return this.axios.get('/cocktails')
    }
}

export default new CocktailApi(axios)