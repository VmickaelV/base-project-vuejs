import { axios } from './index'

export default class CocktailApi {
    constructor(axiosInstance) {
        this.axios = axiosInstance
    }

    findAll() {
        return this.axios.get('/cocktails')
    }
}

export const cocktailApi = new CocktailApi(axios)