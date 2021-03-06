import React, {useEffect, useRef, useState} from "react";
import {withRouter} from "react-router-dom";
import axios from "axios";
import {apiUrl} from "../../Utils/Constants";

function UpdateCategoryPage(props) {
    const nameInput = useRef(null);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get(`${apiUrl}categories/${props.match.params.id}`)
            .then(response => {
                setCategory(response.data);
                setInitialForm(response.data);
            });
    }, []);

    const setInitialForm = (category) => {
        nameInput.current.value = category.name;
    }

    const updateCategoryRequest = (event) => {
        event.preventDefault();
        axios.put(`${apiUrl}categories/${props.match.params.id}`, {
            name: nameInput.current.value
        })
            .then((response) => {
                console.log(response);
                props.history.push('/')
            }, (error) => {
                console.log(error);
            });
    }

    if (!category) {
        return null;
    }
    return (
        <div className="">
            <h4> Update category</h4>
            {/*<form>
                <input ref={nameInput} type="text" name="name" placeholder="category name"/>
                <button id="addCategory" onClick={updateCategoryRequest}>Update</button>
            </form>*/}
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input ref={nameInput} type="text" name="name" className="form-control" aria-describedby="emailHelp"
                           placeholder="category name"/>
                </div>
                <button onClick={updateCategoryRequest} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default withRouter(UpdateCategoryPage);
