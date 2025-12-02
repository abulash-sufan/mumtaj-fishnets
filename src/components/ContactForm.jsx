import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile number is required';
        } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/[- ]/g, ''))) {
            newErrors.mobile = 'Please enter a valid 10-digit mobile number';
        }

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // EmailJS configuration
            // You'll need to replace these with actual EmailJS credentials
            const serviceId = 'service_mumtaj'; // Replace with your EmailJS service ID
            const templateId = 'template_contact'; // Replace with your EmailJS template ID
            const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

            const templateParams = {
                from_name: formData.name,
                from_mobile: formData.mobile,
                from_email: formData.email || 'Not provided',
                message: formData.message,
                to_email: 'abulashsufan123@gmail.com'
            };

            // For now, we'll simulate the email sending
            // Uncomment the line below when you have EmailJS credentials
            // await emailjs.send(serviceId, templateId, templateParams, publicKey);

            // Simulated success (remove this when using real EmailJS)
            await new Promise(resolve => setTimeout(resolve, 1000));

            setStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent successfully. We will contact you soon.'
            });

            setFormData({ name: '', mobile: '', email: '', message: '' });
        } catch (error) {
            console.error('Email send error:', error);
            setStatus({
                type: 'error',
                message: 'Sorry, there was an error sending your message. Please try calling us directly.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Name <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        placeholder="Your full name"
                    />
                    {errors.name && <div className="form-error">{errors.name}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="mobile" className="form-label">
                        Mobile Number <span className="required">*</span>
                    </label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className={`form-input ${errors.mobile ? 'error' : ''}`}
                        placeholder="10-digit mobile number"
                    />
                    {errors.mobile && <div className="form-error">{errors.mobile}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Email (Optional)
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="your.email@example.com"
                    />
                    {errors.email && <div className="form-error">{errors.email}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="form-label">
                        Message <span className="required">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`form-textarea ${errors.message ? 'error' : ''}`}
                        placeholder="Tell us about your requirements..."
                        rows="5"
                    />
                    {errors.message && <div className="form-error">{errors.message}</div>}
                </div>

                {status.message && (
                    <div className={`form-status ${status.type}`}>
                        {status.message}
                    </div>
                )}

                <button type="submit" className="btn btn-primary btn-large" disabled={loading}>
                    {loading ? (
                        <>
                            <span className="loading"></span> Sending...
                        </>
                    ) : (
                        <>
                            <FaPaperPlane /> Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
