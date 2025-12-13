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
                            <a href="tel:+919048592004" className="info-link">
                                +91 90485 92004
                            </a>
                            <p className="info-text">Available for inquiries</p>
                        </div>

                        <div className="contact-info-card glass-card">
                            <div className="info-icon">
                                <FaEnvelope />
                            </div>
                            <h3 className="info-title">Email Us</h3>
                            <div className="info-content">
                                <a href="mailto:mumtajfishnets@gmail.com" className="info-link">
                                    mumtajfishnets@gmail.com
                                </a>
                            </div>
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

            {/* Operating Hours & Trade Info Removed */
            /*
            <section className="section additional-info-section">
                ... removed ...
            </section>
            */}
        </div>
    );
};

export default Contact;
