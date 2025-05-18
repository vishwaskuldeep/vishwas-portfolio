import React from "react";

const Footer = () => {
    return (
        <div>
            <footer id="footer" className="footer light-background">
                <div className="container">
                    <div className="copyright text-center ">
                        <p>© <span>Copyright</span> <strong className="px-1 sitename">Vishwas</strong> <span>All Rights Reserved<br /></span></p>
                    </div>
                    {/* <div className="social-links d-flex justify-content-center">
                        <a href><i className="bi bi-twitter-x" /></a>
                        <a href><i className="bi bi-facebook" /></a>
                        <a href><i className="bi bi-instagram" /></a>
                        <a href><i className="bi bi-linkedin" /></a>
                    </div> */}
                    <div className="credits">
                        {/* All the links in the footer should remain intact. */}
                        {/* You can delete the links only if you've purchased the pro version. */}
                        {/* Licensing information: https://bootstrapmade.com/license/ */}
                        {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="“https://themewagon.com">ThemeWagon
                        </a></div><a href="“https://themewagon.com">
                    </a></div><a href="“https://themewagon.com">
                </a>
            </footer>
        </div>

    )
}

export default Footer