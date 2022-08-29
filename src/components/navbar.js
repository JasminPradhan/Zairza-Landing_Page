import React from "react";
import logo from './images/Zairzalogo.png';
import hamicon from './images/hamburgerMenu.png';
import "./navbar.scss"

function Navbar(){
    return(
        <nav className="navigation">
                    <div className="left">
                        <img src={logo} alt="" className="logo"></img>
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <a href="/" className="sign-in">Sign In</a>
                            </li>
                            <li>
                                <img src={hamicon} alt="" className="Menu-icon"></img>
                            </li>
                        </ul>
                    </div>
                </nav>
    );
}

export default Navbar