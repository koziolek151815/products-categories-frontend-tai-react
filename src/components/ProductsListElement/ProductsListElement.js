import React from "react";

function ProductsListElement({product, deleteProduct}) {
    return (
        <div className="MainPage">
            {product.name}
            {product.price}
            {product.category.name}
            <a className="btn btn-default bg-info"
               href={`/updateProduct/${product.id}`}>Edit</a>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
    );
}

export default ProductsListElement;
