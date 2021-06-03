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
        <div className="">
            <h4> Add category</h4>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input ref={nameInput} type="text" name="name" className="form-control" aria-describedby="emailHelp"
                           placeholder="category name"/>
                </div>
                <button onClick={addCategoryRequest} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default withRouter(AddCategoryPage);
