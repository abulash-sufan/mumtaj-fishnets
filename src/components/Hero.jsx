import { FaPhone } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">Since 2016</div>
                    <h1 className="hero-title">
                        Fishnets & Monofilament Fishing Nets
                        <span className="text-gradient"> Supplier in India</span>
                    </h1>
                    <p className="hero-subtitle">
                        Export-quality fishing nets manufactured in Kanniyakumari, supplying fishermen and fishing businesses across India.
                    </p>
                    <div className="hero-buttons fade-in" style={{ animationDelay: '0.4s' }}>
                        <a href="tel:+919048592004" className="btn btn-primary btn-large">
                            <FaPhone /> Call Now
                        </a>
                        <a href="/products" className="btn btn-secondary btn-large">
                            View Products
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-wave"></div>
        </section>
    );
};

export default Hero;
