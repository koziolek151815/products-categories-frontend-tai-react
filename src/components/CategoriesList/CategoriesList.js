import React from "react";
import {apiUrl} from "../../Utils/Constants";
import axios from "axios";
import CategoriesListElement from "../CategoriesListElement/CategoriesListElement";

class CategoriesList extends React.Component {
    state = {
        categories: []
    };

    constructor(props) {
        super(props);
        this.fetchCategories();
    }
    getCategoriesFromApi = async ()=>{
        return await axios.get(
            `${apiUrl}categories`
        );
    }
    fetchCategories = () => {
        this.getCategoriesFromApi().then((response)=>{
            this.setState({
                categories: response.data
            });
        })
    };



    render() {
        return (
            <div className="MainPage">
                {this.state.categories.map((category, index) => (
                    <CategoriesListElement category={category} key={index}/>
                ))}
            </div>
        );
    }
}
export default CategoriesList;