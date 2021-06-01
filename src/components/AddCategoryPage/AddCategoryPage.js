import React, {useRef} from "react";
import axios from "axios";
import {apiUrl} from "../../Utils/Constants";
import {withRouter} from "react-router-dom";


function AddCategoryPage(props) {
    const nameInput = useRef(null);

    const addCategoryRequest = (event) => {
        event.preventDefault();
        axios.post(`${apiUrl}categories`, {
            name: nameInput.current.value
        })
            .then((response) => {
                props.history.push('/')
            }, (error) => {
            });
    }
    return (
        <div className="MainPage">
            Add category
            <form>
                <input ref={nameInput} type="text" name="name" placeholder="category name"/>
                <button id="addCategory" onClick={addCategoryRequest}>Submit</button>
            </form>
        </div>
    );
}

export default withRouter(AddCategoryPage);
