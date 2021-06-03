import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import ProductsForCategoryPage from "./components/ProductsForCategoryPage/ProductsForCategoryPage";
import AddProductPage from "./components/AddProductPage/AddProductPage";
import AddCategoryPage from "./components/AddCategoryPage/AddCategoryPage";
import UpdateProductPage from "./components/UpdateProductPage/UpdateProductPage";
import UpdateCategoryPage from "./components/UpdateCategoryPage/UpdateCategoryPage";
import "./App.css"

function App() {
    return (
        <Router>
            <div className="App">
                <div className="container d-flex flex-column">
                    <Switch>
                        <Route path="/" exact={true}>
                            <MainPage/>
                        </Route>
                        <Route path="/categories/:id/products">
                            <ProductsForCategoryPage/>
                        </Route>
                        <Route path="/addProduct" exact={true}>
                            <AddProductPage/>
                        </Route>
                        <Route path="/addCategory" exact={true}>
                            <AddCategoryPage/>
                        </Route>
                        <Route path="/updateProduct/:id">
                            <UpdateProductPage/>
                        </Route>
                        <Route path="/updateCategory/:id">
                            <UpdateCategoryPage/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
