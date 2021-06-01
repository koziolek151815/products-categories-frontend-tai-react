import React from "react";
import ProductsList from "../ProductsList/ProductsList";
import CategoriesList from "../CategoriesList/CategoriesList";
import {withRouter} from "react-router-dom";

function MainPage() {
    const allProductsUrl = "products"
    return (
        <div className="MainPage">
            <ProductsList url={allProductsUrl}/>
            <a className="btn btn-default bg-info"
               href={`/addProduct`}>Add product</a>
            <CategoriesList/>
            <a className="btn btn-default bg-info"
               href={`/addCategory`}>Add category</a>
        </div>
    );
}

export default withRouter(MainPage);
