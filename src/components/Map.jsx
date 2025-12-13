import './Map.css';

const Map = () => {
    // Mumtaj Fishnet, Nagercoil coordinates
    const mapSrc = "https://maps.google.com/maps?q=8.1476367,77.3871075&z=15&output=embed";

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
