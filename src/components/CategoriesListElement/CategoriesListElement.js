import React from "react";

function CategoriesListElement({category}) {
    return (
        <div className="MainPage">
            {category.name}
            <a className="btn btn-default bg-info"
               href={`/categories/${category.id}/products`}>Check products</a>
            <a className="btn btn-default bg-info"
               href={`/updateCategory/${category.id}`}>Edit</a>
            <button>Delete</button>
        </div>
    );
}

export default CategoriesListElement;
