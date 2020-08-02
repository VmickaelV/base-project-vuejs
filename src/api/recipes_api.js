import axios from './index'

export class RecipeApi {
    constructor(axiosInstance) {
        this.axios = axiosInstance
    }

    findAll() {
        return this.axios.get('/recipes')
    }
}

export default new RecipeApi(axios)