import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-light  py-4  border-top container mt-5 pt-5" id="footer">
                <div className="container d-flex flex-column align-items-center justify-content-center text-center">
                    <p className="footer-texto mb-3">
                        <b>Onix Home Finished &#169;</b><br />
                        OnixFinished Home. We are committed to delivering innovative, high-quality home remodeling solutions that combine style, durability, and exceptional craftsmanship. Your vision, our passion.
                    </p>
                    <div className="iconos-redes-sociales d-flex gap-4">
                        <a href="https://www.instagram.com/onyxhomefinishes/?igsh=c3ZndG91N2FzODZz" className=" fs-4">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="mailto:onyxpainters03@gmail.com" className=" fs-4">
                            <i className="bi bi-envelope"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
