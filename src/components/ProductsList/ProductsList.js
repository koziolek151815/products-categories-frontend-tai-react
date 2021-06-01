import React from "react";
import {apiUrl} from "../../Utils/Constants";
import axios from "axios";
import ProductsListElement from "../ProductsListElement/ProductsListElement";

class ProductsList extends React.Component {
    state = {
        products: []
    };

    constructor(props) {
        super(props);
        this.fetchProducts();
    }

    getProductsFromApi = async () => {
        return await axios.get(
            `${apiUrl}${this.props.url}`
        );
    }
    fetchProducts = () => {
        this.getProductsFromApi().then((response) => {
            this.setState({
                products: response.data
            });
        })
    };


    render() {
        return (
            <div className="MainPage">
                {this.state.products.map((product, index) => (
                    <ProductsListElement product={product} key={index}/>
                ))}
            </div>
        );
    }
}

export default ProductsList;
