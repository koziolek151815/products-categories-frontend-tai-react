import React from "react";

function CategoriesListElement({category}) {
    return (
        <div className="MainPage">
            {category.name}
        </div>
    );
}

export default CategoriesListElement;
