import React from "react";
import {withRouter} from "react-router-dom";

function UpdateProductPage(props) {
    return (
        <div className="MainPage">
            {`Update product ${props.match.params.id}`}
        </div>
    );
}

export default withRouter(UpdateProductPage);
