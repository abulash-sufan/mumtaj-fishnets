import { FaIndustry, FaBullseye, FaHeart, FaHandshake, FaUsers, FaCheckCircle } from 'react-icons/fa';
import './About.css';

const About = () => {
    const coreValues = [
        {
            icon: <FaCheckCircle />,
            title: 'Quality & Durability',
            description: 'Uncompromising standards in every net we manufacture'
        },
        {
            icon: <FaHandshake />,
            title: 'Integrity in Trade',
            description: 'Honest business practices and transparent pricing'
        },
        {
            icon: <FaUsers />,
            title: 'Customer Focus',
            description: 'Your success is our priority'
        },
        {
            icon: <FaHeart />,
            title: 'Local Community Support',
            description: 'Supporting the fishing economy of Kanyakumari'
        }
    ];

    return (
        <div className="about">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1 className="page-title">
                        About <span className="text-gradient">Mumtaj Fish Nets – Fishnets Manufacturer in Tamil Nadu</span>
                    </h1>
                    <p className="page-subtitle">
                        Casting a wider net of quality since 2016
                    </p>
                </div>
            </section>

            {/* Founding Story */}
            <section className="section story-section">
                <div className="container">
                    <div className="story-content">
                        <div className="story-icon">
                            <FaIndustry />
                        </div>
                        <div className="story-text">
                            <h2 className="section-title">Our Story</h2>
                            <p className="story-paragraph">
                                Established in <strong>2016</strong>, Mumtaj Fish Nets began with a mission to manufacture durable fishnets for the fishing community of Kanniyakumari. Located at the southern coastal tip of Tamil Nadu, our nets are engineered to withstand the challenging conditions of the Bay of Bengal and Arabian Sea.
                            </p>
                            <p className="story-paragraph">
                                Over the years, we have grown from a local manufacturing unit into a trusted fishnets and monofilament supplier across Tamil Nadu and India. Our commitment to quality, consistency, and ethical business practices has made us a preferred choice among fishermen and fishing businesses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="section mission-section">
                <div className="container">
                    <div className="mission-content glass-card">
                        <div className="mission-icon">
                            <FaBullseye />
                        </div>
                        <h2 className="section-title">Our Mission</h2>
                        <p className="mission-text">
                            To manufacture and supply high-quality fishnets and monofilament fishing nets that enhance fishing efficiency, safety, and yield for fishermen across India.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section values-section">
                <div className="container">
                    <h2 className="section-title text-center">
                        Our <span className="text-gradient">Core Values</span>
                    </h2>
                    <div className="values-grid">
                        {coreValues.map((value, index) => (
                            <div key={index} className="value-card glass-card">
                                <div className="value-icon">{value.icon}</div>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facility & Team */}
            <section className="section facility-section">
                <div className="container">
                    <h2 className="section-title text-center">
                        Our <span className="text-gradient">Facility & Team</span>
                    </h2>
                    <div className="facility-content">
                        <p className="facility-text">
                            Our manufacturing unit in Kanniyakumari, Tamil Nadu is equipped to produce precision-mesh monofilament nets used across coastal fishing regions of India. Our skilled team ensures strict quality checks at every stage of production.
                        </p>
                    </div>
                </div>
            </section>

            {/* Business Details Removed */
            /*
            <section className="section business-section">
                ... removed ...
            </section>
            */}
        </div>
    );
};

export default About;
