import React from "react";
import "./style.scss";

// Brendlangan aylanuvchi 3D ko'chish qutisi (dekorativ element)
const Box3D = () => {
    return (
        <div className="box3d-scene" aria-hidden="true">
            <div className="box3d">
                <div className="box3d_face front">
                    <span className="box3d_brand">Easy<br/>Przeprowadzki</span>
                    <span className="box3d_fragile">Ostrożnie</span>
                </div>
                <div className="box3d_face back">
                    <span className="box3d_brand">Easy<br/>Przeprowadzki</span>
                </div>
                <div className="box3d_face right">
                    <span className="box3d_brand">☎ 509 931 555</span>
                </div>
                <div className="box3d_face left">
                    <span className="box3d_brand">Warszawa</span>
                </div>
                <div className="box3d_face top"></div>
                <div className="box3d_face bottom"></div>
            </div>
        </div>
    );
};

export default Box3D;
