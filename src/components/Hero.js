import React from "react";
import { Link } from "react-router-dom";
import vishwas_img from "../assets/WhatsApp Image 2025-05-18 at 14.22.14.jpeg"

const Hero = () => {
    return (
        <>
            {/* <section id="hero" className="hero section">
                <img src="assets/img/hero-bg.jpg" alt='' data-aos="fade-in" />
                <div className="container text-center" data-aos="zoom-out" data-aos-delay={100}>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2>Kelly Adams</h2>
                            <p>I'm a professional illustrator from San Francisco</p>
                            <a href="about.html" className="btn-get-started">About Me</a>
                        </div>
                    </div>
                </div>
            </section> */}
            <section id="hero" className="hero section">
                {/* <img src={vishwas_img} alt='' /> */}
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2>Vishwas Kuldeep</h2>
                            <p>MERN stack developer based in San Francisco, specializing in building scalable, full-stack web applications with MongoDB, Express.js, React, and Node.js.</p>
                            <Link to="/about" className="btn-get-started">About Me</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero