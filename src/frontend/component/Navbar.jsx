import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Onix Home Finished </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#showcase">Showcase</a></li>
                            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#designers">Project</a></li>
                            <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                            <li className="nav-item"><a className="nav-link" href="#footer">Footer</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        
    )
}
