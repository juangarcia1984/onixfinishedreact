import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-light text-dark py-4 mt-5 border-top" id="footer">
                <div className="container d-flex flex-column align-items-center justify-content-center text-center">
                    <p className="footer-texto mb-3">
                        <b>Onix Home Finished &#169;</b><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="iconos-redes-sociales d-flex gap-4">
                        <a href="#" className="text-dark fs-4">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="text-dark fs-4">
                            <i className="bi bi-envelope"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
