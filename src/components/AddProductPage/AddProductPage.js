import React, {useEffect, useRef, useState} from "react";
import {withRouter} from "react-router-dom";
import {apiUrl} from "../../Utils/Constants";
import axios from "axios";

function AddProductPage(props) {
    const [categories, setCategories] = useState([]);
    const nameInput = useRef(null);
    const priceInput = useRef(null);
    const categoryInput = useRef(null);

    useEffect(() => {
        axios.get(`${apiUrl}categories`)
            .then(response => {
                setCategories(response.data);
            });
    }, []);

    const addProductRequest = (event) => {
        event.preventDefault();
        axios.post(`${apiUrl}products`, {
            name: nameInput.current.value,
            price: priceInput.current.value,
            categoryId: categoryInput.current.value
        })
            .then((response) => {
                props.history.push('/')
            }, (error) => {
            });
    }


    return (
        <div className="">
            <h4> Add product</h4>
            {/*            <form>
                <input ref={nameInput} type="text" name="name" placeholder="product name"/>
                <input ref={priceInput} type="number" name="name" placeholder="price"/>
                <select ref={categoryInput}>
                    {categories.map(category =>
                        <option key={category.id} value={category.id}>{category.name}</option>
                    )};
                </select>
                <button id="addCategory" onClick={addProductRequest}>Submit</button>
            </form>*/}
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input ref={nameInput} type="text" name="name" className="form-control"
                           placeholder="name"/>
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input ref={priceInput} type="number" name="name" className="form-control"
                           placeholder="price"/>
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <select className="custom-select " ref={categoryInput}>
                        {categories.map(category =>
                            <option key={category.id} value={category.id}>{category.name}</option>
                        )};
                    </select>
                </div>
                <button onClick={addProductRequest} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default withRouter(AddProductPage);
