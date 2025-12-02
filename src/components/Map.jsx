import './Map.css';

const Map = () => {
    // Nagercoil, Kanyakumari coordinates
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125786.77537110847!2d77.35089!3d8.17953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0c3c3c3c3c3%3A0x3b04f0c3c3c3c3c3!2sNagercoil%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1733167171000!5m2!1sen!2sin";

    return (
        <div className="map-wrapper">
            <div className="map-container">
                <iframe
                    src={mapSrc}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mumtaj Fish Nets Location - Nagercoil, Kanyakumari"
                ></iframe>
            </div>
            <div className="map-overlay">
                <div className="map-info">
                    <h3>Visit Our Facility</h3>
                    <p>Nagercoil, Kanyakumari</p>
                    <p>Tamil Nadu - 629001</p>
                </div>
            </div>
        </div>
    );
};

export default Map;
