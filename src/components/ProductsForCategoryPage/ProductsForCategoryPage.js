import React from "react";
import ProductsList from "../ProductsList/ProductsList";
import {withRouter} from "react-router-dom";

function ProductsForCategoryPage(props) {
    const productsForCategoryUrl = `categories/${props.match.params.id}/products`;
    return (
        <div className="MainPage">
            <ProductsList url={productsForCategoryUrl}/>
        </div>
    );
}

export default withRouter(ProductsForCategoryPage);
