import React from "react";
import git from './images/git.png';
import insta from './images/insta.png';
import twitter from './images/twitter.png';
import mail from './images/mail.png';
import "./slide_7.scss"

function Slide7() {
    return (
        <div className="container-7">
            <div className="section-7">
                <section className="section-71">
                    <h1 className="title-7">Something on your mind</h1>
                    <div className="content-71">We will help you with your idea and turn it into reality</div>
                    <div className="content-72">OUTR (CET Campus), Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha.
                        +91 7205883336</div>
                </section>
                <section className="section-72">
                    <img src={git} alt="" className="img-7"></img>
                    <img src={insta} alt="" className="img-7"></img>
                    <img src={twitter} alt="" className="img-7"></img>
                    <img src={mail} alt="" className="img-7"></img>
                </section>
            </div>
        </div>
    );
}
export default Slide7