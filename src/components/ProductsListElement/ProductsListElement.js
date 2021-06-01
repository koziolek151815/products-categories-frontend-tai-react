import React from "react";

function ProductsListElement({product}) {
    return (
        <div className="MainPage">
            {product.name}
            {product.price}
            {product.category.name}
        </div>
    );
}

export default ProductsListElement;
