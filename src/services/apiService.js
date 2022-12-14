import axios from 'axios';

export class apiServer {
    axiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:4000/api/',
            headers: {"Access-Control-Allow-Origin": "*"},
        });
    }

    //method
    async getProducts(setProducts) {
        let data = await this.axiosInstance.get('products').then(({data}) => data).catch(err => {
            console.log(err)
        });
        setProducts(data);
    }

    //todo - do the query on the server and not in the client
    //method for getting list of products from the server by filter params
    async FilterProducts(QueryParmeters) {
        let data = await this.axiosInstance.get('products').then(({data}) => data).catch(err => {
            console.log(err)
        });
        const filteredProducts = data.filter(product => product.name.toLowerCase().includes(QueryParmeters.searchValue.toLowerCase()) &&
            product.brand.toLowerCase().includes(QueryParmeters.brand.toLowerCase()) && product.category.toLowerCase().includes(QueryParmeters.category.toLowerCase()));
        return filteredProducts;
    }


//get the user from the server by mail and password
    async getUser(mail, pass) {
        const req = {email: mail, password: pass};
        let data = await axios.get('http://localhost:4000/api/users/', {params: req}
        ).then(({data}) => {
            return data
        }).catch(err => {
                console.log(err)
            }
        );
        return data;
    }

//the function add new user to the server
    async addUser(user) {
        console.log("api")
        console.log(user)
        let data = await axios.post('http://localhost:4000/api/users/new', null, {params: user}).then(({data}) => data).catch(err => {
            console.log(err)
        });
        return data;
    }

//the function get user id and return the user cart from the server api
    async getCartList(userId) {
        let data = await this.axiosInstance.get('user/cart', {params: {id: userId}}).then(({data}) => data).catch(err => {
            console.log(err)
        });
        return data
    }

    async addProductToCart(userId, productId, quantity) {
        let data = await this.axiosInstance.post('user/cart/add', {
            data: {
                userId: userId,
                productId: productId,
                quantity: quantity
            }
        }).then(({data}) => data).catch(err => {
            console.log(err)
        });
        return data
    }

    async removeProductFromCart(userId, productId) {
        let data = await this.axiosInstance.post('user/cart/delete', {
            data: {
                userId: userId,
                productId: productId
            }
        }).then(({data}) => data).catch(err => {
                console.log(err)
            }
        );
        return data
    }

    async updateProduct(product) {
        return await this.axiosInstance.post('products/update', {data: product}).then(({data}) => data).catch(err => {
            console.log(err)
        })
    }

    //get all the cart of the users from the serever (as objects with the name of the user and the cart)
    async getUsersCart(setProducts) {
         await this.axiosInstance.get('user/carts').then(({data}) => setProducts(data)).catch(err => {
            console.log(err)
        })
    }

    async uploadImage(image) {
        return await this.axiosInstance.post('products/uploadPicture', image).then(({data}) => data).catch(err => {
            console.log(err)
        })
    }

    async addProduct(product) {
        return await this.axiosInstance.post('products/new',{data:product}).then(({data}) => data).catch(err => {
            console.log(err)
        })
    }

    async deleteProduct(productId) {
        return await this.axiosInstance.delete('products/delete',{data:{productId:productId}}).then(({data}) => data).catch(err => {
            console.log(err)
        })
    }
}




