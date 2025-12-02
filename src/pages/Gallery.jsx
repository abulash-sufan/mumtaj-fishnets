import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Gallery images - using placeholder paths
    const galleryImages = [
        {
            id: 1,
            src: '/images/monofilament-net.jpg',
            alt: 'Monofilament Fishing Net - Close-up',
            category: 'products'
        },
        {
            id: 2,
            src: '/images/nylon-net.jpg',
            alt: 'Nylon Multi-Filament Net',
            category: 'products'
        },
        {
            id: 3,
            src: '/images/fishing-line.jpg',
            alt: 'Premium Fishing Lines',
            category: 'products'
        },
        {
            id: 4,
            src: '/images/net-mesh-detail.jpg',
            alt: 'Net Mesh Detail - Quality Knotting',
            category: 'products'
        },
        {
            id: 5,
            src: '/images/packaging.jpg',
            alt: 'Net Packaging Process',
            category: 'logistics'
        },
        {
            id: 6,
            src: '/images/quality-check.jpg',
            alt: 'Quality Control Process',
            category: 'logistics'
        },
        {
            id: 7,
            src: '/images/facility.jpg',
            alt: 'Manufacturing Facility',
            category: 'facility'
        },
        {
            id: 8,
            src: '/images/team.jpg',
            alt: 'Mumtaj Fish Nets Team',
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
