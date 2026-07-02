import React from "react";
import "./style.scss";

const Spinner = () => {

    return (
        <div className="loading-page">
            <div className="loading-circle"/>
            <h2 className="loading-text">Loading...</h2>
        </div>
    );
};


export default Spinner;
