import React from "react"
import './footer.css'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">

                <ul className="footer__list">
                    <li>
                        <a href="#portfolio" className="footer__link">View projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="https://www.linkedin.com/in/giovanni-kevin-204422300/" className="home__social-icon" target='_blank'>
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a href="https://www.facebook.com/giovanni.kevin884" className="home__social-icon" target='_blank'>
                    <i className="bx bxl-instagram-alt"></i>
                </a>

                <a href="https://github.com/Giovannikev/" className="home__social-icon" target='_blank'>
                    <i className="bx bxl-github"></i>
                </a>
                </div>

                <span className="footer__copy">
                    &copy; 2023 Giovanni Kevin. All rights reserved.
                </span>
            </div>
        </footer>
    )
}
export default Footer