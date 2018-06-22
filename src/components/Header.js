import React, { Component } from 'react';


class Header extends Component{
    render(){
        return(
            <div id="header">
                <div id="logo">
                    <a href="index.html"><img src="/images/logo.png" alt="" title="ГЕОЦВЕТ ЕООД"/></a>
                </div>
                <div id="contacts">
                    <div id="phones">
                        <img src="images/phoneIcon.png" alt=""/>
                        строителство - 0878 304 222 
                        <br/> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; геодезия - 0878 217 198
                    </div>
                    <div id="mail">
                        <a href="mailto:geocvet_eood@abv.bg">
                        <img src="/images/mailIcon.png"/>
                        строителство - geocvet_eood@abv.bg <br/> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; геодезия - geo@geocvet.com </a>
                    </div>
                </div>
            </div>
        )
    }
} 
export default Header;