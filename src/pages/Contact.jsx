import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <h1 className="page-title">
                        Get in <span className="text-gradient">Touch</span>
                    </h1>
                    <p className="page-subtitle">
                        We're here to help with your fishing net requirements
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="section contact-info-section">
                <div className="container">
                    <div className="contact-info-grid">
                        <div className="contact-info-card glass-card">
                            <div className="info-icon">
                                <FaPhone />
                            </div>
                            <h3>Call Us</h3>
                            <a href="tel:+919876543210" className="info-link">
                                +91-98765 43210
                            </a>
                            <p className="info-text">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                        </div>

                        <div className="contact-info-card glass-card">
                            <div className="info-icon">
                                <FaEnvelope />
                            </div>
                            <h3>Email Us</h3>
                            <a href="mailto:sales@mumtajfishnets.com" className="info-link">
                                sales@mumtajfishnets.com
                            </a>
                            <p className="info-text">We'll respond within 24 hours</p>
                        </div>

                        <div className="contact-info-card glass-card">
                            <div className="info-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <h3>Visit Us</h3>
                            <p className="info-link">
                                Nagercoil, Kanyakumari<br />
                                Tamil Nadu - 629001
                            </p>
                            <p className="info-text">India</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="section form-map-section">
                <div className="container">
                    <div className="form-map-grid">
                        <div className="form-column">
                            <h2 className="section-title">Send Us a Message</h2>
                            <p className="section-description">
                                Fill out the form below and our team will get back to you shortly.
                            </p>
                            <ContactForm />
                        </div>
                        <div className="map-column">
                            <h2 className="section-title">Find Us</h2>
                            <p className="section-description">
                                Visit our facility in Nagercoil, Kanyakumari.
                            </p>
                            <Map />
                        </div>
                    </div>
                </div>
            </section>

            {/* Operating Hours & Trade Info */}
            <section className="section additional-info-section">
                <div className="container">
                    <div className="additional-info-grid">
                        <div className="info-box glass-card">
                            <div className="info-box-icon">
                                <FaClock />
                            </div>
                            <h3>Operating Hours</h3>
                            <div className="hours-list">
                                <div className="hours-item">
                                    <span className="day">Monday - Saturday</span>
                                    <span className="time">9:00 AM - 6:00 PM IST</span>
                                </div>
                                <div className="hours-item">
                                    <span className="day">Sunday</span>
                                    <span className="time">Closed</span>
                                </div>
                            </div>
                        </div>

                        <div className="info-box glass-card">
                            <h3>Trade Information</h3>
                            <div className="trade-list">
                                <div className="trade-item">
                                    <span className="trade-label">GST Number:</span>
                                    <span className="trade-value">33GEDPM4412P1ZA</span>
                                </div>
                                <div className="trade-item">
                                    <span className="trade-label">HSN Codes:</span>
                                    <span className="trade-value">5608, 560811</span>
                                </div>
                                <div className="trade-item">
                                    <span className="trade-label">Business Type:</span>
                                    <span className="trade-value">Proprietorship</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
