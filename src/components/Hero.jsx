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
                        The Most Trusted Manufacturer of
                        <span className="text-gradient"> Specialized Fishing Nets</span>
                    </h1>
                    <p className="hero-subtitle">
                        Premium Monofilament and Nylon Fishing Nets crafted with precision
                        in Kanyakumari. Built for the harsh marine environments of the Bay
                        of Bengal and Arabian Sea.
                    </p>
                    <div className="hero-cta">
                        <a href="tel:+919876543210" className="btn btn-primary btn-large">
                            <FaPhone /> Call +91-98765 43210 for Bulk Quote
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
