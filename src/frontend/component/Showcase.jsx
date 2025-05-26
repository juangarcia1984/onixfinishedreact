import React from 'react'

export default function Showcase() {
    return (
            <div className="container" style={{ marginTop: "100px" }}>
                <div className="mb-5" id="showcase">
                    <h1 className="display-4 fw-semibold text-dark">Interior Design</h1>
                    <h1 className="display-4 fw-semibold text-dark">Showcase</h1>
                    <hr style={{ width: "50%", border: "3px solid blue" }} className="rounded" />
                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <img src="/public/plantilla-onix/imagenes/imgfachada1.webp" className="img-fluid img-uniform" alt="Concrete meets bricks" />
                        <img src="/public/plantilla-onix/imagenes/imgfrente.webp" className="img-fluid img-uniform" alt="Scandinavian design" />
                        <img src="/public/plantilla-onix/imagenes/imgfachada2.webp" className="img-fluid img-uniform" alt="Designer chairs" />
                    </div>
                    <div className="col-md-6">
                        <img src="/public/plantilla-onix/imagenes/imgfachada.webp" className="img-fluid img-uniform" alt="Atrium window" />
                        <img src="/public/plantilla-onix/imagenes/imghead5.jpg" className="img-fluid img-uniform" alt="Bedroom and office" />
                        <img src="/public/plantilla-onix/imagenes/imghead6.jpg" className="img-fluid img-uniform" alt="Modern style" />
                    </div>
                </div>
            </div>
            )
}
