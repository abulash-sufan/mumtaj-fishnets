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
                            9 Years of <span className="text-gradient">Commitment to Quality</span>
                        </h2>
                        <p className="intro-text">
                            Since 2016, Mumtaj Fish Nets has been at the forefront of fishing net manufacturing
                            in Kanyakumari. Our unwavering commitment to quality, resilience, and innovation has
                            made us the most trusted partner for fishing professionals across Tamil Nadu and beyond.
                        </p>
                        <p className="intro-text">
                            We take pride in supporting the local fishing economy by delivering superior products
                            that maximize yield, ensure safety, and stand the test of time in the most challenging
                            marine conditions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section why-choose-section">
                <div className="container">
                    <h2 className="section-title text-center">
                        Why Choose <span className="text-gradient">Mumtaj Fish Nets?</span>
                    </h2>
                    <div className="usps-grid">
                        {usps.map((usp, index) => (
                            <div key={index} className="usp-card glass-card">
                                <div className="usp-icon">{usp.icon}</div>
                                <h3 className="usp-title">{usp.title}</h3>
                                <p className="usp-description">{usp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section featured-section">
                <div className="container">
                    <h2 className="section-title text-center">
                        Our <span className="text-gradient">Featured Products</span>
                    </h2>
                    <div className="products-grid">
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
                            <a href="tel:+919876543210" className="btn btn-primary btn-large">
                                <FaPhone /> Call +91-98765 43210
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
