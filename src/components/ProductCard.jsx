import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ id, name, description, image, price, featured }) => {
    return (
        <div className={`product-card ${featured ? 'featured' : ''}`}>
            <div className="product-image-wrapper">
                <img src={image} alt={name} className="product-image" />
                {featured && <div className="product-badge">Featured</div>}
            </div>
            <div className="product-content">
                <h3 className="product-name">{name}</h3>
                <p className="product-description">{description}</p>
                {price && <div className="product-price">{price}</div>}
                <Link to={`/products/${id}`} className="product-link">
                    View Details <FaArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
