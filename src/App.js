import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import ProductsForCategoryPage from "./components/ProductsForCategoryPage/ProductsForCategoryPage";

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
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
