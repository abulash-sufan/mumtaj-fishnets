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
                            Trusted Fishnets Manufacturer & <span className="text-gradient">Monofilament Supplier in India</span>
                        </h2>
                        <p className="intro-text">
                            Mumtaj Fish Nets is a proud women-led enterprise and a trusted manufacturer of high-quality fishnets and monofilament fishing nets in India. Based in Kanniyakumari, Tamil Nadu, we specialize in precision-manufactured fishing nets designed for durability, strength, and performance in demanding marine environments.
                        </p>
                        <p className="intro-text">
                            We deliver export-quality monofilament fishnets across Pan India, supporting coastal fisheries, commercial fishing operations, and traditional fishermen with reliable and long-lasting net solutions.
                        </p>
                        <p className="intro-text">
                            With over 9 years of experience, our focus remains on consistent quality, ethical manufacturing, and empowering communities through sustainable employment.
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
                            <h3 className="usp-title">Women-Led Manufacturer</h3>
                            <p className="usp-description">Founded and operated by women entrepreneurs with over 90% women workforce.</p>
                        </div>
                        <div className="usp-card glass-card">
                            <div className="usp-icon"><FaAnchor /></div>
                            <h3 className="usp-title">Pan India Fishnet Supply</h3>
                            <p className="usp-description">Reliable supply of fishnets and monofilaments across India, including Tamil Nadu and coastal regions.</p>
                        </div>
                        <div className="usp-card glass-card">
                            <div className="usp-icon"><FaCheckCircle /></div>
                            <h3 className="usp-title">Built for Indian Marine Conditions</h3>
                            <p className="usp-description">Designed for the Bay of Bengal and Arabian Sea fishing environments.</p>
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
                    <p className="section-description text-center" style={{ marginBottom: '2rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Explore our range of monofilament fishnets and fishing nets widely used by fishermen across India.
                    </p>
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
                        <h2 className="cta-title">Looking for Reliable Fishnets in India?</h2>
                        <p className="cta-text">
                            Contact Mumtaj Fish Nets today for premium monofilament fishing nets, customized to your fishing requirements and delivered anywhere in India.
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
