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
                        Fishnets & Monofilament Supplier in <span className="text-gradient">Kanniyakumari</span>
                    </h1>
                    <p className="page-subtitle">
                        Serving fishermen across Kanniyakumari, Tamil Nadu, and India
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

            {/* Address Paragraph Section */}
            <section className="section address-section">
                <div className="container">
                    <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
                            Mumtaj Fish Nets is a trusted manufacturer and supplier of fishnets and monofilament fishing nets in Kanniyakumari. From our facility in Nagercoil, we supply high-quality fishing nets to local fishermen, coastal operations across Tamil Nadu, and customers throughout India.
                        </p>
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


            {/* Local FAQ Section */}
            <section className="section faq-section">
                <div className="container">
                    <h2 className="section-title text-center" style={{ marginBottom: '2rem' }}>Frequently Asked Questions</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                            <h3 style={{ marginBottom: '0.75rem', color: '#2c5282' }}>Do you supply fishnets in Kanniyakumari?</h3>
                            <p style={{ margin: 0, lineHeight: '1.6' }}>Yes, we manufacture and supply fishnets directly from our Kanniyakumari facility to local fishermen and businesses.</p>
                        </div>
                        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                            <h3 style={{ marginBottom: '0.75rem', color: '#2c5282' }}>Do you deliver fishnets across Tamil Nadu and India?</h3>
                            <p style={{ margin: 0, lineHeight: '1.6' }}>Yes, we supply monofilament fishnets across Tamil Nadu and offer Pan-India delivery.</p>
                        </div>
                        <div className="glass-card" style={{ padding: '1.5rem' }}>
                            <h3 style={{ marginBottom: '0.75rem', color: '#2c5282' }}>Can I visit your manufacturing unit?</h3>
                            <p style={{ margin: 0, lineHeight: '1.6' }}>Yes, our facility is located in Nagercoil, Kanniyakumari. Please contact us to schedule a visit.</p>
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
