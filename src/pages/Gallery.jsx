import { useState } from 'react';
import './Gallery.css';
import product1 from '../assets/images/product-1.jpg';
import product2 from '../assets/images/product-2.jpg';
import product3 from '../assets/images/product-3.jpg';
import factory from '../assets/images/factory.png';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Gallery images
    const galleryImages = [
        {
            id: 1,
            src: product1,
            alt: 'Monofilament fishnets manufactured in Kanniyakumari Tamil Nadu',
            category: 'products'
        },
        {
            id: 2,
            src: product2,
            alt: 'Fishing nets supplied across Tamil Nadu coastal regions',
            category: 'products'
        },
        {
            id: 3,
            src: product3,
            alt: 'Premium monofilament fishing nets from Kanniyakumari',
            category: 'products'
        },
        {
            id: 4,
            src: factory,
            alt: 'Fishnet manufacturing unit in Kanniyakumari',
            category: 'facility'
        }
    ];

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery-page">
            {/* Hero Section */}
            <section className="gallery-hero">
                <div className="container">
                    <h1 className="page-title">
                        Fishnets Manufacturing & Supply Gallery
                    </h1>
                    <p className="page-subtitle">
                        Monofilament fishnets manufactured in Tamil Nadu and supplied across India
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section gallery-section">
                <div className="container">
                    <div className="gallery-grid">
                        {galleryImages.map((image) => (
                            <div
                                key={image.id}
                                className="gallery-item"
                                onClick={() => openLightbox(image)}
                            >
                                <div className="gallery-image-wrapper">
                                    <img src={image.src} alt={image.alt} className="gallery-image" />
                                    <div className="gallery-overlay">
                                        <span className="gallery-caption">{image.alt}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox}>
                            &times;
                        </button>
                        <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox-image" />
                        <p className="lightbox-caption">{selectedImage.alt}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
