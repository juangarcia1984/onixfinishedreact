import React from 'react'

export default function Showcase() {
    return (
            <div className="container" style={{ marginTop: "80px" }}>
                <div className="mb-5" id="showcase">
                    <h1 className="display-4 fw-semibold text-center">Interior and Exterior Design</h1>
                    <hr className="mx-auto border-3 border-primary w-50" />

                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <img src="/public/plantilla-onix/imagenes/imgfachada1.webp" className="img-fluid img-showcase" alt="Concrete meets bricks" />
                        <img src="/public/plantilla-onix/imagenes/imgfrente.webp" className="img-fluid img-showcase" alt="Scandinavian design" />
                        <img src="/public/plantilla-onix/imagenes/imgfachada2.webp" className="img-fluid img-showcase" alt="Designer chairs" />
                    </div>
                    <div className="col-md-6">
                        <img src="/public/plantilla-onix/imagenes/imginterior2.webp" className="img-fluid img-showcase" alt="Atrium window" />
                        <img src="/public/plantilla-onix/imagenes/imginterior.webp" className="img-fluid img-showcase" alt="Bedroom and office" />
                        <img src="/public/plantilla-onix/imagenes/imghead6.jpg" className="img-fluid img-showcase" alt="Modern style" />
                    </div>
                </div>
            </div>
            )
}
