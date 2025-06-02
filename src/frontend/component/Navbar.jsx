import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Onyx Home Finishes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/services" className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/project" className="nav-link">Project</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/footer" className="nav-link">Footer</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}