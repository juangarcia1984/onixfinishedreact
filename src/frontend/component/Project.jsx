import React from 'react'

export default function Project() {
    return (
        <div>
            <div className="mt-5" id="designers">
                <h1 className="display-4 fw-semibold text-dark">Project</h1>
                <hr style={{ width: "50%", border: "3px solid blue" }} className="rounded" />
                <p className="fs-5 lh-lg text-secondary">The best team in the world.</p>
                <p className="fs-5 lh-lg text-secondary">We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p><b>Our designers are thoughtfully chosen</b>:</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                <div className="col section-services pastel-bg-blue">
                    <div className="card h-100 bg-light">
                        <img src="/public/plantilla-onix/imagenes/imgperson1.jpeg" alt="John" className="card-img-top img-fluid img-uniform" />
                        <div className="card-body">
                            <h3 className="card-title">John Doe</h3>
                            <p className="card-subtitle text-muted">CEO & Founder</p>
                            <p className="card-text">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        </div>
                    </div>
                </div>
                <div className="col section-services pastel-bg-blue">
                    <div className="card h-100 bg-light">
                        <img src="/public/plantilla-onix/imagenes/imgperson2.jpeg" alt="Jane" className="card-img-top img-fluid img-uniform" />
                        <div className="card-body">
                            <h3 className="card-title">Jane Doe</h3>
                            <p className="card-subtitle text-muted titulo">Designer</p>
                            <p className="card-text">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        </div>
                    </div>
                </div>
                <div className="col section-services pastel-bg-blue">
                    <div className="card h-100 bg-light">
                        <img src="/public/plantilla-onix/imagenes/imgperson3.jpg" alt="Mike" className="card-img-top img-fluid img-uniform" />
                        <div className="card-body">
                            <h3 className="card-title">Mike Ross</h3>
                            <p className="card-subtitle text-muted">Architect</p>
                            <p className="card-text">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
