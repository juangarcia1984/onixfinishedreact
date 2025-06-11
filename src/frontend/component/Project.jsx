import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/api/projects')
            .then(res => res.ok ? res.json() : [])
            .then(data => setProjects(data));
    }, []);

    return (
        <div>
            <div className="mt-5" id="designers">
                <h1 className="display-4 fw-semibold text-center">Project</h1>
                <hr className="mx-auto border-3 border-primary w-50" />
                <p className="fs-5 lh-lg ">
                    At OnixFinished Home, some of our most outstanding projects focus on transforming interiors through elegant wallpaper installations, flawless interior painting, and the timeless beauty of wooden floors. Each project is approached with a commitment to detail and design excellence, ensuring that every space reflects our clients’ personal style and enhances the overall ambiance of their home. From modern accent walls to classic hardwood finishes, we combine high-quality materials with expert craftsmanship to deliver results that are both stunning and durable. These projects not only elevate the aesthetic of any room but also add long-lasting value to your home.
                </p>
                <p><b>Our designs are carefully selected:</b></p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                <div className="col section-services pastel-bg-blue">
                    <Link to={`/projects/1`} className="text-decoration-none" id='1'>
                        <div className="card h-100 bg-light">
                            <img src="/public/plantilla-onix/imagenes/imgalcoba.webp" alt="Wallpaper" className="card-img-top img-fluid img-project" />
                            <div className="card-body">
                                <h3 className="card-title">Wallpaper</h3>
                                <p className="card-subtitle titulo">Interior designer</p>
                                <p className="card-text">Enhance your walls with our expertly installed wallpaper designs that add texture, style, and personality to any room. At OnixFinished Home, we offer a wide range of high-quality patterns to suit every taste, creating elegant and unique interior spaces.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col section-services pastel-bg-blue">
                    <Link to={`/projects/2`} className="text-decoration-none" id='2'>
                        <div className="card h-100 bg-light">
                            <img src="/public/plantilla-onix/imagenes/imginterior4.webp" alt="Interior paint" className="card-img-top img-fluid img-project" />
                            <div className="card-body">
                                <h3 className="card-title">Interior paint</h3>
                                <p className="card-subtitle titulo">Interior designer</p>
                                <p className="card-text">Refresh your space with our premium interior painting services. At OnixFinished Home, we deliver smooth, vibrant finishes using top-quality paints that bring color, character, and a renewed atmosphere to every room.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col section-services pastel-bg-blue">
                    <Link to={`/projects/3`} className="text-decoration-none" id='3'>
                        <div className="card h-100 bg-light">
                            <img src="/public/plantilla-onix/imagenes/imgpisomadera.webp" alt="Wooden floors" className="card-img-top img-fluid img-project" />
                            <div className="card-body">
                                <h3 className="card-title">Wooden floors</h3>
                                <p className="card-subtitle titulo">Interior designer</p>
                                <p className="card-text">Add warmth and elegance to your home with our expertly installed wooden floors. OnixFinished Home offers durable, high-quality flooring solutions that combine natural beauty with lasting performance.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col section-services pastel-bg-blue">
                    <Link to={`/projects/4`} className="text-decoration-none" id='4'>
                        <div className="card h-100 bg-light">
                            <img src="/public/plantilla-onix/imagenes/imgacabados1.webp" alt="Moldings" className="card-img-top img-fluid img-project" />
                            <div className="card-body">
                                <h3 className="card-title">Moldings</h3>
                                <p className="card-subtitle titulo">Interior designer</p>
                                <p className="card-text">Add a touch of elegance and definition to your interiors with our expertly crafted moldings. At OnixFinished Home, we design and install high-quality crown, baseboard, and decorative moldings that enhance the architectural beauty and style of every room.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col section-services pastel-bg-blue">
                    <Link to={`/projects/5`} className="text-decoration-none" id='5'>
                        <div className="card h-100 bg-light">
                            <img src="/public/plantilla-onix/imagenes/imginterior2.webp" alt="Accent wall" className="card-img-top img-fluid img-project" />
                            <div className="card-body">
                                <h3 className="card-title">Accent wall</h3>
                                <p className="card-subtitle titulo">Interior designer</p>
                                <p className="card-text">Make a bold statement with our custom accent wall designs. At OnixFinished Home, we create stunning feature walls using textures, colors, and materials that bring depth, personality, and style to your space.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col section-services pastel-bg-blue">
                    <Link to={`/projects/6`} className="text-decoration-none" id='6'>
                        <div className="card h-100 bg-light">
                            <img src="/public/plantilla-onix/imagenes/imgcocina2.webp" alt="Cabinets Painting" className="card-img-top img-fluid img-project" />
                            <div className="card-body">
                                <h3 className="card-title">Cabinets Painting</h3>
                                <p className="card-subtitle titulo">Interior designer</p>
                                <p className="card-text">Give your kitchen or bathroom a fresh new look with our professional cabinet painting services. At OnixFinished Home, we use durable, high-quality finishes to restore and transform your cabinets with precision and style.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}