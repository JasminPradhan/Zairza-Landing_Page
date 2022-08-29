import React from "react";
import img3 from './images/img3.png';
import img30 from './images/newbot.png';
import "./slide_3.scss"

function Slide3() {
    return(
        <div className="container-3">
            <div className="section-3">
                <section className="section-31">
                    <h1 className="title-3">
                        On a tech adventure to turn ideas into Reality
                    </h1>
                    <div className="content-3">
                        A bunch of interesting and innovative projects, showing skills and expertise of members in their respective fields.
                    </div>
                    <div className="btn3"><button className="Have-A-Look">
                        Have a Look <span className="arrow">🡪</span>
                    </button></div>
                </section>
                <section className="section-32">
                    <img src={img3} alt="" className="img-3"></img>
                    <img src={img30} alt="" className="img-30"></img>
                </section>
            </div>
        </div>
    );
}

export default Slide3