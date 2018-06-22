import React from "react";

import "./Backdrop.css";

const backdrop = props => (
    <nav className="backdrop" onClick={props.onDrawerClick}>
    </nav>
)
export default backdrop;