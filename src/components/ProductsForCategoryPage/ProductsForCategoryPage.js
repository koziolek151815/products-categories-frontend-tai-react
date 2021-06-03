import React, {useEffect, useState} from "react";
import ProductsList from "../ProductsList/ProductsList";
import {withRouter} from "react-router-dom";
import axios from "axios";
import {apiUrl} from "../../Utils/Constants";
import "./allForCategory.css";

function ProductsForCategoryPage(props) {
    const [category, setCategory] = useState(null);
    useEffect(() => {
        axios.get(`${apiUrl}categories/${props.match.params.id}`).then((response) =>{
            setCategory(response.data);
        });
    }, []);

    const productsForCategoryUrl = `categories/${props.match.params.id}/products`;
    return (
        <div className="all">
            {category && <h4> Oto wszystkie produkty z kategorii: {category.name}</h4>}
            <ProductsList url={productsForCategoryUrl}/>
        </div>
    );
}

export default withRouter(ProductsForCategoryPage);
