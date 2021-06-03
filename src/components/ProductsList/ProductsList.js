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

    deleteProduct = (id) => {
        axios.delete(
            `${apiUrl}products/${id}`
        );
        const filteredArray = this.state.products.filter(product => product.id !== id)
        this.setState({products: filteredArray});
    }

    render() {
        return (
            <div className="">
                {this.state.products.length ?
                    <table className="table-bordered">
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {this.state.products.map((product, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category.name}</td>
                                <td><a className="btn btn-default bg-info"
                                       href={`/updateProduct/${product.id}`}>Edit</a></td>
                                <td>
                                    <button className="btn btn-default bg-danger"
                                            onClick={() => this.deleteProduct(product.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </table>
                    :<h5> No products</h5>
                }
                {/*{this.state.products.map((product, index) => (
                    <ProductsListElement product={product} key={index} deleteProduct={this.deleteProduct}/>
                ))}*/}
            </div>
        );
    }
}

export default ProductsList;
