import React from "react";
import ProductsList from "../ProductsList/ProductsList";
import CategoriesList from "../CategoriesList/CategoriesList";
import {withRouter} from "react-router-dom";
import "./MainPage.css";

function MainPage() {
    const allProductsUrl = "products"
    return (
        <div className="MainPage">
            <div>
                <h2>Products</h2>
                <ProductsList url={allProductsUrl}/>
                <a className="btn btn-default bg-success"
                   href={`/addProduct`}>Add product</a>
            </div>
            <div>
                <h2>Categories</h2>
                <CategoriesList/>
                <a className="btn btn-default bg-success"
                   href={`/addCategory`}>Add category</a>
            </div>
        </div>
    );
}

export default withRouter(MainPage);
