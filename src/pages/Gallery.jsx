import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Gallery images
    const galleryImages = [
        {
            id: 1,
            src: '/src/assets/images/product-1.jpg',
            alt: 'Monofilament Fishnet Bundles',
            category: 'products'
        },
        {
            id: 2,
            src: '/src/assets/images/product-2.jpg',
            alt: 'Yellow Monofilament Nets',
            category: 'products'
        },
        {
            id: 3,
            src: '/src/assets/images/product-3.jpg',
            alt: 'Green Fishing Nets',
            category: 'products'
        },
        {
            id: 4,
            src: '/src/assets/images/factory.png',
            alt: 'Manufacturing Facility',
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
                        Our <span className="text-gradient">Gallery</span>
                    </h1>
                    <p className="page-subtitle">
                        Explore our products, facility, and manufacturing process
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
