import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/productsData';
import { FaCheckCircle, FaAnchor, FaCertificate, FaPhone } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const featuredProducts = getFeaturedProducts();

    const usps = [
        {
            icon: <FaCertificate />,
            title: 'Direct Manufacturer',
            description: 'Best pricing and quality control with no middlemen'
        },
        {
            icon: <FaAnchor />,
            title: 'Built for Durability',
            description: 'Nets designed for harsh marine environments of Bay of Bengal and Arabian Sea'
        },
        {
            icon: <FaCheckCircle />,
            title: 'Precision Manufacturing',
            description: 'Specialist in precision-mesh Monofilament net manufacturing'
        }
    ];

    return (
        <div className="home">
            <Hero />

            {/* Company Introduction */}
            <section className="section intro-section">
                <div className="container">
                    <div className="intro-content">
                        <h2 className="section-title">
                            Empowering Communities, <span className="text-gradient">Delivering Quality</span>
                        </h2>
                        <p className="intro-text">
                            Mumtaj Fish Nets is a proud women-led enterprise, founded by women entrepreneurs with a vision to transform the fishing net industry.
                            With a workforce comprising more than 90% women, we are dedicated to empowerment, skill development, and community upliftment.
                        </p>
                        <p className="intro-text">
                            We deliver export-quality Monofilament Fishnets across Pan India, ensuring that our products meet the highest standards of durability and performance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Women Empowerment & Why Choose Us */}
            <section className="section why-choose-section">
                <div className="container">
                    <h2 className="section-title text-center">
                        Why Choose <span className="text-gradient">Mumtaj Fish Nets?</span>
                    </h2>
                    <div className="usps-grid">
                        <div className="usp-card glass-card">
                            <div className="usp-icon"><FaCertificate /></div>
                            <h3 className="usp-title">Women Led & Powered</h3>
                            <p className="usp-description">Founded by women entrepreneurs, with over 90% of our workforce being women.</p>
                        </div>
                        <div className="usp-card glass-card">
                            <div className="usp-icon"><FaAnchor /></div>
                            <h3 className="usp-title">Pan India Service</h3>
                            <p className="usp-description">Delivering high-quality fishnets to every corner of India.</p>
                        </div>
                        <div className="usp-card glass-card">
                            <div className="usp-icon"><FaCheckCircle /></div>
                            <h3 className="usp-title">Community Upliftment</h3>
                            <p className="usp-description">Committed to skill development and empowering local communities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section featured-section">
                <div className="container">
                    <h2 className="section-title text-center">
                        Our <span className="text-gradient">Featured Products</span>
                    </h2>
                    <div className="products-grid centered">
                        {featuredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                description={product.shortDescription}
                                image={product.image}
                                price={product.price}
                                featured={product.featured}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content glass-card">
                        <h2 className="cta-title">Ready to Outfit Your Fleet?</h2>
                        <p className="cta-text">
                            Contact us today for customized net solutions tailored to your specific fishing needs.
                            Our expert team is ready to help you maximize your catch with premium quality nets.
                        </p>
                        <div className="cta-buttons">
                            <a href="tel:+919048592004" className="btn btn-primary btn-large">
                                <FaPhone /> Call Now
                            </a>
                            <a href="/contact" className="btn btn-secondary btn-large">
                                Get a Quote
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
