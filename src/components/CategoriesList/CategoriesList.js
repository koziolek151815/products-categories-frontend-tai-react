import React from "react";
import {apiUrl} from "../../Utils/Constants";
import axios from "axios";
import CategoriesListElement from "../CategoriesListElement/CategoriesListElement";
import "./CategoriesList.css"

class CategoriesList extends React.Component {
    state = {
        categories: [],
        error: false
    };

    constructor(props) {
        super(props);
        this.fetchCategories();
    }

    getCategoriesFromApi = async () => {
        return await axios.get(
            `${apiUrl}categories`
        );
    }
    fetchCategories = () => {
        this.getCategoriesFromApi().then((response) => {
            this.setState({
                categories: response.data
            });
        })
    };

    deleteCategory = (id) => {
        axios.delete(
            `${apiUrl}categories/${id}`
        ).then((response) => {
            const filteredArray = this.state.categories.filter(category => category.id !== id)
            this.setState({categories: filteredArray});
        }, (error) => {
            this.setState({
                error: true
            })

        });
    }
    onErrorSubmit = () => {
        this.setState({
            error: !this.state.error
        })
    }

    render() {
        return (
            <div className="categories">
                <table class="table-bordered">
                    <tr>
                        <th>Index</th>
                        <th>Category name</th>
                        <th>All products</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {this.state.categories.map((category, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{category.name}</td>
                            <td><a className="btn btn-default bg-secondary"
                                   href={`/categories/${category.id}/products`}>Check products</a></td>
                            <td><a className="btn btn-default bg-info"
                                   href={`/updateCategory/${category.id}`}>Edit</a></td>
                            <td>
                                <button className="btn btn-default bg-danger" onClick={() => this.deleteCategory(category.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </table>
                {/*{this.state.categories.map((category, index) => (
                    <CategoriesListElement category={category} key={index} deleteCategory={this.deleteCategory}/>
                ))}*/}
                {this.state.error && <div className="error">
                    <h4 id="err">Aby usunac kategorię najpierw usuń produkty ją zawierajace</h4>
                    <button id="errorButton"onClick={this.onErrorSubmit}>Ok</button>
                </div>}
            </div>
        );
    }
}

export default CategoriesList;
