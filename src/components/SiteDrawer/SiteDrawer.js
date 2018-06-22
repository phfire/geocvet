import React from "react";

import "./SideDrawer.css";

const sideDrawer = props => (
    <nav className={"side-drawer " + (props.visible ? "side-drawer_show" : "")}>
        <ul>
            <li><a href='#About'>About</a></li>
            <li><a href='#Directions'>Directions</a></li>
            <li><a href='#Footer'>Footer</a></li>
            <li><a href='#Projects'>Projects</a></li>
        </ul>
    </nav>
)
export default sideDrawer;





