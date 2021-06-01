import React from "react";
import {withRouter} from "react-router-dom";

function UpdateCategoryPage(props) {
    return (
        <div className="MainPage">
            {`Update category ${props.match.params.id}`}
        </div>
    );
}

export default withRouter(UpdateCategoryPage);
