import React from "react";
import ProductsList from "../ProductsList/ProductsList";
import CategoriesList from "../CategoriesList/CategoriesList";

function MainPage() {
    const allProductsUrl = "products"
    return (
        <div className="MainPage">
            <ProductsList url = {allProductsUrl} />
            <CategoriesList/>
        </div>
    );
}

export default MainPage;
