import React, {useEffect, useRef, useState} from "react";
import {withRouter} from "react-router-dom";
import axios from "axios";
import {apiUrl} from "../../Utils/Constants";

function UpdateProductPage(props) {
    const nameInput = useRef(null);
    const priceInput = useRef(null);
    const categoryInput = useRef(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get(`${apiUrl}categories/`)
            .then(response => {
                setCategories(response.data);
                axios.get(`${apiUrl}products/${props.match.params.id}`)
                    .then(response => {
                        setInitialForm(response.data);
                    });
            });
    }, []);

    const setInitialForm = (product) => {
        nameInput.current.value = product.name;
        priceInput.current.value = product.price;
        categoryInput.current.value = product.category.id;
    }

    const updateProductRequest = (event) => {
        event.preventDefault();
        axios.put(`${apiUrl}products/${props.match.params.id}`, {
            name: nameInput.current.value,
            price: priceInput.current.value,
            categoryId: categoryInput.current.value
        })
            .then((response) => {
                console.log(response);
                props.history.push('/')
            }, (error) => {
                console.log(error);
            });
    }
    return (
        <div className="MainPage">
            Update product
            <form>
                <input ref={nameInput} type="text" name="name"/>
                <input ref={priceInput} type="number" name="name"/>
                <select ref={categoryInput}>
                    {categories.map(category =>
                        <option key={category.id} value={category.id}>{category.name}</option>
                    )};
                </select>
                <button id="addCategory" onClick={updateProductRequest}>Update</button>
            </form>
        </div>
    );
}

export default withRouter(UpdateProductPage);
