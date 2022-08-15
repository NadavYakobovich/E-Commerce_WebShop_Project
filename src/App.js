import './App.css';
import ProductCard from "./components/productCard/ProductCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import {Col, Row} from "react-bootstrap";
import ProductsBoard from "./components/ProductsBoard";
import SideBar from "./components/sidebar/SideBar";
import {apiServer} from "./services/apiService";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CartList from "./components/cart/CartList";


function App() {
    //contains the products from the api
    //const productsList = getProducts();
    const [Products, setProducts] = useState(null);
    const api = new apiServer();


    //filters the products by search term in the search bar (that is in the sidebar)
    const doSearch = function (QueryParmeters) {
        api.FilterProducts(QueryParmeters).then(data => {
            setProducts(data);
        })
    }

    if (Products === null) {
        api.getProducts(setProducts);
        //waiting for the products to be loaded from the api server
        return <div>Loading...</div>
    } else {
        return (
            <Router>
                <div className="App">
                    <Row>
                        <NavBar className="col-8"></NavBar>
                    </Row>
                    <Row>
                        {/*<Col sm={3}>*/}
                            {/*//the sidebar that contains the filters and search*/}
                        {/*    <SideBar doSearch={doSearch}></SideBar>*/}
                        {/*    </Col>*/}
                            <Routes>
                                <Route path="/" element={<ProductsBoard className="m-2" products={Products} doSearch={doSearch}/>}></Route>
                                <Route path="/cart" element={<CartList Products={Products}></CartList>}> </Route>
                            </Routes>
                    </Row>
                </div>
            </Router>
        );
    }
}

export default App;
