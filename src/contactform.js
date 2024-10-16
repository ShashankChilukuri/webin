import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Css/ContactForm.css';
import contact from './Images/—Pngtree—human resources contact us_5413375.png';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_owtrzwj',
            'template_641gc77',
            formData,
            'R4-piyBHE3u7NXHMZ'
        )
        .then((response) => {
            console.log('Email sent successfully:', response.status, response.text);
            alert('Form submitted successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
        })
        .catch((error) => {
            console.error('Failed to send email:', error);
            alert('Failed to send form. Please try again later.');
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <div className="contact-container">
            <div className="contact-form-container">
                <div className="contact-form">
                    <h2 className="form-heading">Submit Your Query !!</h2>
                    <p className="center">We will be glad to help you</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group full-width">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="form-group full-width">
                            <button type="submit" className="btn-submit">
                                {loading ? <div className="loader"></div> : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="contact-image-container">
                <h2 className="form-heading">Contact US</h2>
                <img src={contact} alt="Contact Us" className="contact-image" />
            </div>
        </div>
    );
};

export default ContactForm;
