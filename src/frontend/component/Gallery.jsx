import React from 'react'

export default function Gallery() {
    return (
        <div>
            <div className="py-4 container mt-5 pt-5" id="gallery">
                <h1 className="display-4 fw-semibold text-center">Gallery</h1>
                <hr className="mx-auto border-3 border-primary w-50" />

            </div>
            <div className="row g-4 mb-4">
                <div className="col-lg-3 col-md-6">
                    <div className="position-relative">
                        <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 rounded-end">Summer House</span>
                        <img src="/public/plantilla-onix/imagenes/imgfachada1.webp" alt="House" className="img-fluid img-gallery  mt-4" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="position-relative">
                        <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 rounded-end">Brick House</span>
                        <img src="/public/plantilla-onix/imagenes/imgalcoba.webp" alt="House" className="img-fluid img-gallery mt-4" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="position-relative">
                        <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 rounded-end">Renovated</span>
                        <img src="/public/plantilla-onix/imagenes/imgantes_despues.webp" alt="House" className="img-fluid img-gallery mt-4" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="position-relative">
                        <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 rounded-end">Barn House</span>
                        <img src="/public/plantilla-onix/imagenes/imgbaño2.webp" alt="House" className="img-fluid img-gallery mt-4" />
                    </div>
                </div>
            </div>
            <div className="row g-4 mb-5">
                <div className="col-lg-3 col-md-6">
                    <div className="position-relative">
                        <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 rounded-end">Summer House</span>
                        <img src="/public/plantilla-onix/imagenes/imgcocina.webp" alt="House" className="img-fluid img-gallery mt-4" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="position-relative">
                        <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 rounded-end">Brick House</span>
                        <img src="/public/plantilla-onix/imagenes/imginterior3.webp" alt="House" className="img-fluid img-gallery mt-4" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="position-relative">
                        <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 rounded-end">Renovated</span>
                        <img src="/public/plantilla-onix/imagenes/imginterior2.webp" alt="House" className="img-fluid img-gallery mt-4" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="position-relative">
                        <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 rounded-end">Barn House</span>
                        <img src="/public/plantilla-onix/imagenes/imgbaño2.webp" alt="House" className="img-fluid img-gallery mt-4" />
                    </div>
                </div>
            </div>
            <div className="row g-4 mb-5">
                <div className="col-lg-3 col-md-6">
                    <div className="position-relative">
                        <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 rounded-end">Summer House</span>
                        <img src="/public/plantilla-onix/imagenes/imgtapiz.webp" alt="House" className="img-fluid img-gallery mt-4" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="position-relative">
                        <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 rounded-end">Brick House</span>
                        <img src="/public/plantilla-onix/imagenes/imgpisomadera.webp" alt="House" className="img-fluid img-gallery mt-4" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="position-relative">
                        <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 rounded-end">Renovated</span>
                        <img src="/public/plantilla-onix/imagenes/imginterior4.webp" alt="House" className="img-fluid img-gallery mt-4" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="position-relative">
                        <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 rounded-end">Barn House</span>
                        <img src="/public/plantilla-onix/imagenes/imginterior.webp" alt="House" className="img-fluid img-gallery mt-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}
