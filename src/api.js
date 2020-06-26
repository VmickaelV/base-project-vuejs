export const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_URL_API,
})

export class CocktailApi {
    constructor(axios) {
        this.axios = axios
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

export const cocktailApi = new CocktailApi(axiosInstance)
