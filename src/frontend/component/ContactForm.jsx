import React from 'react'

export default function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío con fetch/Axios/etc.
        alert("Message sent (simulation).");
    };

    return (
        <div>
            <div className="mt-5 " id="contact">
                <h1 className="display-4 fw-semibold text-center ">Contact</h1>
                <hr className="mx-auto border-3 border-primary w-50" />
                <p>Do you want us to style your home? Fill out the form and give us the details — we love meeting new people!</p>
                <form onSubmit={handleSubmit} className="p-4 rounded shadow bg-white" style={{ maxWidth: "100%", margin: "auto" }}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-semibold">Name</label>
                        <input id="name" className="form-control" type="text" name="Name" required placeholder="Your full name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold">Email</label>
                        <input id="email" className="form-control" type="email" name="Email" required placeholder="your@email.com" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="form-label fw-semibold">Message</label>
                        <textarea id="message" className="form-control" name="Message" rows="4" required placeholder="Write your message here..."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg w-100 shadow-sm">Send Message</button>
                </form>
            </div>
        </div>
    )
}

