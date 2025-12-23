import { getAllProducts } from '../data/productsData';
import ProductCard from '../components/ProductCard';
import { FaPhone } from 'react-icons/fa';
import './Products.css';

const Products = () => {
    const products = getAllProducts();

    return (
        <div className="products-page">
            {/* Hero Section */}
            <section className="products-hero">
                <div className="container">
                    <h1 className="page-title">
                        Fishnets & <span className="text-gradient">Monofilament Nets Supplied Across Tamil Nadu</span>
                    </h1>
                    <p className="page-subtitle">
                        Premium fishing nets manufactured in Kanniyakumari for coastal and commercial fishing
                    </p>
                </div>
            </section>

            {/* Products Intro Section */}
            <section className="section products-intro-section">
                <div className="container">
                    <p className="section-description" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        At Mumtaj Fish Nets, we manufacture and supply a wide range of monofilament fishnets used across Tamil Nadu's coastal fishing regions. Our products are designed to meet the requirements of small-scale fishermen as well as large fishing operations.
                    </p>
                    <p className="section-description" style={{ textAlign: 'center', maxWidth: '900px', margin: '1rem auto 0', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        From Kanniyakumari to major fishing hubs across Tamil Nadu, our nets are trusted for strength, precision mesh, and long operational life.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section products-section">
                <div className="container">
                    <div className="products-grid">
                        {products.map((product) => (
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

            {/* Custom Manufacturing CTA */}
            <section className="section custom-cta-section">
                <div className="container">
                    <div className="custom-cta glass-card">
                        <h2 className="cta-title">Custom Fishnets Manufacturing in Tamil Nadu</h2>
                        <p className="cta-text">
                            We offer custom-made monofilament fishing nets with specific mesh sizes, depths, colors, and materials, manufactured at our Kanniyakumari facility and supplied across Tamil Nadu and India.
                        </p>
                        <div className="cta-buttons">
                            <a href="tel:+919048592004" className="btn btn-primary btn-large">
                                <FaPhone /> Call for Custom Solutions
                            </a>
                            <a href="/contact" className="btn btn-secondary btn-large">
                                Request a Quote
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
