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
                <ProductsList url={allProductsUrl}/>
                <a className="btn btn-default bg-success"
                   href={`/addProduct`}>Add product</a>
            </div>
            <div>
                <CategoriesList/>
                <a className="btn btn-default bg-success"
                   href={`/addCategory`}>Add category</a>
            </div>
        </div>
    );
}

export default withRouter(MainPage);
