import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/productsData';
import { FaCheckCircle, FaPhone, FaTruck, FaArrowLeft } from 'react-icons/fa';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = getProductById(id);

    if (!product) {
        return (
            <div className="product-not-found">
                <div className="container">
                    <h1>Product Not Found</h1>
                    <p>The product you're looking for doesn't exist.</p>
                    <Link to="/products" className="btn btn-primary">
                        <FaArrowLeft /> Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="product-detail">
            {/* Breadcrumb */}
            <section className="breadcrumb-section">
                <div className="container">
                    <Link to="/products" className="breadcrumb-link">
                        <FaArrowLeft /> Back to Products
                    </Link>
                </div>
            </section>

            {/* Product Header */}
            <section className="section product-header">
                <div className="container">
                    <div className="product-header-grid">
                        <div className="product-image-section">
                            <div className="product-image-wrapper">
                                <img src={product.image} alt={product.name} className="product-detail-image" />
                                {product.featured && <div className="featured-badge">Featured Product</div>}
                            </div>
                        </div>
                        <div className="product-info-section">
                            <h1 className="product-title">{product.name}</h1>
                            <p className="product-description" style={{ marginBottom: '1rem', fontWeight: '500', color: '#2c5282' }}>
                                This monofilament fishing net is manufactured at our Kanniyakumari facility and supplied across Tamil Nadu and India. Designed for durability and precision, it is suitable for coastal and commercial fishing operations in Indian marine conditions.
                            </p>
                            <p className="product-description">{product.description}</p>
                            <div className="product-price-box">
                                <div className="price">{product.price}</div>
                                <p className="price-note">{product.priceNote}</p>
                            </div>
                            <div className="product-cta">
                                <a href="tel:+919048592004" className="btn btn-primary btn-large">
                                    <FaPhone /> Call for Pricing
                                </a>
                                <Link to="/contact" className="btn btn-secondary btn-large">
                                    Request Details
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section features-section">
                <div className="container">
                    <h2 className="section-title">Key Features</h2>
                    <div className="features-grid">
                        {product.features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <FaCheckCircle className="feature-icon" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="section applications-section">
                <div className="container">
                    <h2 className="section-title">Applications</h2>
                    <p className="section-description" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                        Widely used by fishermen across Tamil Nadu and other coastal regions of India.
                    </p>
                    <div className="applications-grid">
                        {product.applications.map((application, index) => (
                            <div key={index} className="application-item glass-card">
                                {application}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specifications */}
            <section className="section specifications-section">
                <div className="container">
                    <h2 className="section-title">Specifications</h2>
                    <div className="specifications-content glass-card">
                        {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="spec-item">
                                <div className="spec-label">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                <div className="spec-value">
                                    {Array.isArray(value) ? (
                                        value.map((item, index) => (
                                            typeof item === 'object' ? (
                                                <div key={index} className="spec-object">
                                                    <strong>{item.name}:</strong> {item.features.join(', ')}
                                                </div>
                                            ) : (
                                                <span key={index} className="spec-tag">{item}</span>
                                            )
                                        ))
                                    ) : (
                                        value
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Delivery Info */}
            {product.delivery && (
                <section className="section delivery-section">
                    <div className="container">
                        <div className="delivery-box glass-card">
                            <FaTruck className="delivery-icon" />
                            <div>
                                <h3>Delivery Information</h3>
                                <p>{product.delivery}</p>
                                <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
                                    We offer reliable delivery of our fishnets and monofilaments across India, with quick dispatch from Tamil Nadu.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Contact CTA */}
            <section className="section contact-cta-section">
                <div className="container">
                    <div className="contact-cta glass-card">
                        <h2>Need More Information?</h2>
                        <p>Contact our expert team for detailed specifications, custom requirements, or bulk pricing.</p>
                        <div className="cta-buttons">
                            <a href="tel:+919876543210" className="btn btn-primary btn-large">
                                <FaPhone /> Call +91-98765 43210
                            </a>
                            <Link to="/contact" className="btn btn-secondary btn-large">
                                Send Inquiry
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
