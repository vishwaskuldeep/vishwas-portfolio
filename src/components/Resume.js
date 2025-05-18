import React from "react";
import resume_pdf from "../assets/download-resume.pdf"

const Resume = () => {
    return (
        <>
         <section id="resume" className="resume section">
                {/* Section Title */}
                <div className="container section-title">
                    <h2>Resume</h2>
                    <p>Experienced MERN Stack Developer with a strong background in building dynamic and responsive full-stack web applications.</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="resume-title">Download / View Full Resume</h3>
                            <iframe
                                src={resume_pdf}
                                width="100%"
                                height="600px"
                                title="Resume PDF"
                                style={{ border: "1px solid #ccc", borderRadius: "8px" }}
                            />
                            <p className="mt-3 text-center">
                                <a href={resume_pdf} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    Download Resume (PDF)
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume