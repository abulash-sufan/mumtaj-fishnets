import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import './FloatingCallButton.css';

const FloatingCallButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    // Pages where we don't show the floating button (they already have call buttons)
    const pagesWithCallButton = ['/', '/contact'];
    const shouldShow = !pagesWithCallButton.includes(location.pathname);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling down 300px
            if (window.scrollY > 300 && shouldShow) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [shouldShow]);

    if (!shouldShow) return null;

    return (
        <a
            href="tel:+919048592004"
            className={`floating-call-button ${isVisible ? 'visible' : ''}`}
            aria-label="Call now"
        >
            <FaPhone />
        </a>
    );
};

export default FloatingCallButton;
