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
                        About <span className="text-gradient">Mumtaj Fish Nets</span>
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
                                Established in <strong>2016</strong>, Mumtaj Fish Nets was born from a vision to
                                provide the fishing community of Kanyakumari with nets that could withstand the
                                harsh marine environments of the Bay of Bengal and Arabian Sea.
                            </p>
                            <p className="story-paragraph">
                                Over the past 9 years, we've grown from a small local manufacturer to the most
                                trusted name in specialized fishing nets across Tamil Nadu. Our journey has been
                                guided by one simple motto: <em>"Casting a wider net of quality."</em>
                            </p>
                            <p className="story-paragraph">
                                Today, we continue to serve fishermen and fishing businesses with the same
                                dedication and commitment to excellence that defined our first day in business.
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
                            To deliver superior, long-lasting fishing gear that maximizes yield and safety for
                            our customers, maintaining strict quality standards from raw material selection to
                            finished product delivery.
                        </p>
                        <p className="mission-text">
                            We are committed to innovation, sustainability, and supporting the livelihoods of
                            fishing professionals through products they can trust in the most challenging conditions.
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
                            Our small, dedicated team operates from our main manufacturing unit in Kanyakumari,
                            leveraging efficient, modern manufacturing techniques to deliver consistent quality.
                        </p>
                        <p className="facility-text">
                            Every member of our team brings expertise and passion to their work, ensuring that
                            each net meets our exacting standards before it reaches your hands.
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
