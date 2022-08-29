import React from "react";
import img2 from './images/img2.png';
import "./slide_2.scss"

function Slide2() {
    return(
        <div className="container-2">
            <div className="section-2">
                <section className="section-22">
                    <img src={img2} alt="" className="img-2"></img>
                </section>
                <section className="section-21">
                    <h1 className="title-2">
                        Choose the world you wanna dive in
                    </h1>
                    <div className="content-2">
                        A bunch of interesting and innovative projects, showing skills and expertise of members in their respective fields.
                    </div>
                    <div className="btn2"><button className="Have-A-Look">
                        Have a Look <span className="arrow">🡪</span>
                    </button></div>
                </section>
            </div>
        </div>
    );
}
export default Slide2