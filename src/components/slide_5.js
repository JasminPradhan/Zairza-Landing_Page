import React from "react";
import "./slide_5.scss"

function Slide5() {
    return(
        <div className="container-5">
            <div className="section-5">
            <div className="title-5"><h1>Wanna Join Us?</h1></div>
            <div className="content-5 sub-1">Give us you email ID . We will reach out to you.</div>
            <div className="emailid"><input type="email" placeholder="Email here" className="email"></input></div>
            <div className="content-5 sub-2">Already a member? <a href="\" className="Log-in">Log In</a> to learn and grow</div>
            <div className="btn"><button className="lego">Let's Go <span className="arrow">🡪</span></button></div>
            </div>
        </div>
    );
}

export default Slide5