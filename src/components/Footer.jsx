import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">Mumtaj Fish Nets</h3>
                        <p className="footer-description">
                            Since 2016, we've been the most trusted manufacturer of specialized
                            Monofilament Fishnets. Empowering women through sustainable employment.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Service Area Removed */}

                    <div className="footer-section">
                        <h4 className="footer-heading">Contact Info</h4>
                        <ul className="footer-contact">
                            <li>
                                <FaPhone />
                                <div>
                                    <a href="tel:+919048592004">+91 90485 92004</a><br />
                                    <a href="tel:+919025526472">+91 90255 26472</a>
                                </div>
                            </li>
                            <li>
                                <FaEnvelope />
                                <a href="mailto:mumtajfishnets@gmail.com">mumtajfishnets@gmail.com</a>
                            </li>
                            <li>
                                <FaMapMarkerAlt />
                                <span>Mumtaj Fishnet<br />Nagercoil, Kanyakumari</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Mumtaj Fish Nets. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
