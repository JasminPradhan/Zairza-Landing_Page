import React from "react";
import img6 from './images/img-6.png';
import "./slide_6.scss"

function Slide6() {
    return(
        <div className="container-6">
            <div className="section-6">
                <section className="section-61">
                <h1 className="title-6">Wanna know more about the team</h1>
                <div className="content-6">We develop skills in multiple domains related to tech and design. Skills that will help you gain recognition in the industry and help you grow.
            </div>
                <div className="btn6"><button className="Visit-team">Visit team<span className="arrow"> 🡪</span></button></div>
                </section>
                <section className="section-62">
                    <img src={img6} alt="" className="img-6"></img>
                </section>
                </div>
        </div>
    );
}
export default Slide6