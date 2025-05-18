import React from "react";
import vishwas_img from "../assets/vishwasImg.jfif"

const About = () => {
    return (
        <>
            <section id="about" className="about section">
                {/* Section Title */}
                <div className="container section-title">
                    <h2>About</h2>
                    <p>Passionate full-stack developer building modern, scalable web applications using the MERN stack.</p>
                </div>{/* End Section Title */}
                <div className="container" data-aos-delay={100}>
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <img src={vishwas_img} className="img-fluid" alt="Profile" />
                        </div>
                        <div className="col-lg-8 content">
                            <h2>MERN Stack Developer</h2>
                            <p className="fst-italic py-3">
                                I specialize in building full-stack applications using MongoDB, Express.js, React, and Node.js. I love turning complex problems into simple, beautiful, and intuitive solutions.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>17 March 2005</span></li>
                                        {/* <li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span>www.lokeshdev.com</span></li> */}
                                        <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+91 8003446614</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Jaipur</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>20 Years</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>Bachelor of Computer Application</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>vishwaskuldeep14@gmail.com</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="py-3">
                                I have experience building everything from RESTful APIs to complex front-end interfaces. I focus on writing clean, maintainable code and delivering high-quality products. I'm always looking to take on challenging new projects where I can apply my skills and grow as a developer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" className="skills section">
                {/* Section Title */}
                <div className="container section-title">
                    <h2>Skills</h2>
                    <p>Proficient in building full-stack web applications using modern JavaScript technologies and tools.</p>
                </div>
                {/* End Section Title */}
                <div className="container" data-aos-delay={100}>
                    <div className="row skills-content skills-animation">
                        <div className="col-lg-6">
                            <div className="progress">
                                <span className="skill"><span>MongoDB</span> <i className="val">70%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" style={{ width: "70%" }} role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill"><span>Express.js</span> <i className="val">85%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" style={{ width: "85%" }} role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill"><span>React.js</span> <i className="val">95%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" style={{ width: "95%" }} role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="progress">
                                <span className="skill"><span>Node.js</span> <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" style={{ width: "90%" }} role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill"><span>RESTful APIs</span> <i className="val">85%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" style={{ width: "85%" }} role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill"><span>Git & GitHub</span> <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" style={{ width: "80%" }} role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default About;
