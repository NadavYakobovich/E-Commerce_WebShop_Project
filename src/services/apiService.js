import dataProdacts from '../data/products.json';
import axios from 'axios';

 export  class apiServer {
    axiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:4000/api/',
            headers: {"Access-Control-Allow-Origin": "*"},
        });
    }

    //method
    async getProducts(setProducts){
        let data = await this.axiosInstance.get('products').then(({data}) => data).catch(err => {
            console.log(err)
        });
        setProducts(data);
    }

    async FilterProducts(QueryParmeters){
        let data = await this.axiosInstance.get('products').then(({data}) => data).catch(err => {
            console.log(err)
        });
        const filteredProducts = data.filter(product => product.name.toLowerCase().includes(QueryParmeters.searchValue.toLowerCase()) &&
            product.brand.toLowerCase().includes(QueryParmeters.brand.toLowerCase()) && product.category.toLowerCase().includes(QueryParmeters.category.toLowerCase()));
        return filteredProducts;
    }
}

