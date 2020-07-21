import axios from './index'

export class IngredientsApi {
    constructor(axiosInstance) {
        this.axios = axiosInstance
    }

    findAll() {
        return this.axios.get('/ingredients')
    }

    create(ingredientLabel) {
        return this.axios.post('/ingredients', ingredientLabel, { headers: {"Content-Type": "application/json"}})
    }
    delete(id) {
        return this.axios.delete('/ingredients/' + id)
    }
}

export default new IngredientsApi(axios)