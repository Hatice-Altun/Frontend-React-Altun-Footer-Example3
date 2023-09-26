import React from "react";
import LogoAltunIT from "../assets/Logo-AltunIT-White.png";
import "./Footer.css";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_box">
                        <div className="logo">
                            <div className="logo_img">
                                <img src={LogoAltunIT} alt=" "/>

                                {/*<img src={Logo} alt=" "/>*/}
                            </div>
                            <h2>Example</h2>
                            {/*<h2>FitBody</h2>*/}
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eaque explicabo minus nam neque quis!</p>
                    </div>

                    <div className="footer_box">
                        <h4 className="footer_title">Company</h4>
                        <ul className="footer_links">
                            <li><a href="#">Our program</a></li>
                            <li><a href="#">Our plan</a></li>
                            <li><a href="#">Become a member</a></li>
                        </ul>
                    </div>

                    <div className="footer_box">
                        <h4 className="footer_title">Quick Links</h4>
                        <ul className="footer_links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                </div>
                <p className="copyright">Copyright - {year} developed by AltunIT | All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
