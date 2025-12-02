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
                            Monofilament and Nylon Fishing Nets in Kanyakumari.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <FaFacebook />
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                        </div>
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

                    <div className="footer-section">
                        <h4 className="footer-heading">Products</h4>
                        <ul className="footer-links">
                            <li><Link to="/products/monofilament">Monofilament Fishnet</Link></li>
                            <li><Link to="/products/nylon">Nylon Multi Filament Net</Link></li>
                            <li><Link to="/products/fishing-line">Fishing Line</Link></li>
                            <li><Link to="/products">All Products</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Contact Info</h4>
                        <ul className="footer-contact">
                            <li>
                                <FaPhone />
                                <a href="tel:+919876543210">+91-98765 43210</a>
                            </li>
                            <li>
                                <FaEnvelope />
                                <a href="mailto:sales@mumtajfishnets.com">sales@mumtajfishnets.com</a>
                            </li>
                            <li>
                                <FaMapMarkerAlt />
                                <span>Nagercoil, Kanyakumari<br />Tamil Nadu - 629001</span>
                            </li>
                        </ul>
                        <div className="footer-trade">
                            <p><strong>GST:</strong> 33GEDPM4412P1ZA</p>
                            <p><strong>HSN:</strong> 5608, 560811</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Mumtaj Fish Nets. All rights reserved.</p>
                    <p className="footer-tagline">Casting a wider net of quality</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
