import React from 'react'
import { useState, useEffect    } from 'react';
import { useParams } from 'react-router-dom';

export default function ContactForm() {
    const [formStatus, setFormStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/contact-messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); 
            } else {
                setFormStatus('Error sending message');
            }
        } catch (error) {
            console.error(error);
            setFormStatus('Error connecting to server');
        }
}
    
    return (
        <div>
            <div className="mt-5 " id="contact">
                <h1 className="display-4 fw-semibold text-center ">Contact</h1>
                <hr className="mx-auto border-3 border-primary w-50" />
                <p>Do you want us to style your home? Fill out the form and give us the details — we love meeting new people!</p>
                <form onSubmit={handleSubmit} className="p-4 rounded shadow bg-white" style={{ maxWidth: "100%", margin: "auto" }}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-semibold">Name</label>
                        <input id="name" className="form-control" type="text" name="name" required placeholder="Your full name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold">Email</label>
                        <input id="email" className="form-control" type="email" name="email" required placeholder="your@email.com" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="form-label fw-semibold">Message</label>
                        <textarea id="message" className="form-control" name="message" rows="4" required placeholder="Write your message here..." value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg w-100 shadow-sm">Send Message</button>
                </form>
            </div>
        </div>
    )
}

