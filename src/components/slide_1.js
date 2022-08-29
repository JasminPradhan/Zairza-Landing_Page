import React from "react";
import img1 from './images/img-1.png';
import "./slide_1.scss"

function Slide1() {
    return (
            <div className="container-1">
                <div className="section-1">
                    <section className="section-11">
                        <h1 className="title-1">Curious Minds striving to learn</h1>
                        <div className="content-1">We develop skills in multiple domains related to tech and design. Skills that will help you gain recognition in the industry and help you grow.
                        </div>
                        <div className="btn1"><button className="Join-Us">Join Us  <span className="arrow"> 🡪</span></button></div>
                    </section>
                    <section className="section-12">
                        <img src={img1} alt="" className="img-1"></img>
                    </section>
                </div>
            </div>
    );
}
export default Slide1