import LinkedIn from "./icons/LinkedIn.svg";
import GitHub from "./icons/GitHub.svg";
import Instagram from "./icons/Instagram.svg"

const Footer = () => {
    return(
        <footer>
            <div className="footer_container" id="contact">
                <p className="skills_text">
                    Contacts
                </p>
                <h4 className="name">
                    Get in touch
                </h4>
                <p className="footer_email">
                    gmunichandrareddy@gmail.com
                </p>
                <div className="footer_links">
                    <img src={LinkedIn} alt="LinkedIn" className="footer_link" />
                    <img src={GitHub} alt="GitHub" className="footer_link" />
                    <img src={Instagram} alt="Instagram" className="footer_link" />
                </div>
                <p className="footer_copyright footer_email">
                    Copyright © 2023.
                </p>
            </div>
        </footer>
    );
}

export default Footer;