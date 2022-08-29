import React from "react";
import img4 from './images/proj1.png';
import "./slide_4.scss"

function Slide4() {
    return(
        <div className="container-4">
            <div className="section-4">
                <section className="section-42">
                    <img src={img4} alt="" className="img-4"></img>
                </section>
                <section className="section-41">
                    <h1 className="title-4">
                        Insightful resources and sessions that will help you to grow
                    </h1>
                    <div className="content-4">
                        Blogs, Articles, Books etc, curated by core members of Zairza.
                    </div><div className="btn4">
                    <button className="Get-More">
                        Get More <span className="arrow">🡪</span>
                    </button></div>
                </section>
            </div>
        </div>
    );
}
export default Slide4