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
                        Our <span className="text-gradient">Products</span>
                    </h1>
                    <p className="page-subtitle">
                        Premium fishing nets and lines crafted with precision for maximum performance
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
                        <h2 className="cta-title">Can't Find Your Specification?</h2>
                        <p className="cta-text">
                            We offer custom net manufacturing services tailored to your exact requirements.
                            Whether you need specific mesh sizes, colors, depths, or materials, our expert
                            team can create the perfect solution for your fishing needs.
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
