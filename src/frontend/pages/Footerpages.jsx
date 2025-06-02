
import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/Footer'

export default function Footerpages() {
  return (
    <div>
        <Navbar />
        <div className="container mt-5">
            <div className="mb-5" id="footer">
            <h1 className="display-4 fw-semibold text-center">Footer</h1>
            <hr className="mx-auto border-3 border-primary w-50" />
            <p className="fs-5 lh-lg text-center">
                OnixFinished Home. We are committed to delivering innovative, high-quality home remodeling solutions that combine style, durability, and exceptional craftsmanship. Your vision, our passion.
            </p>
            </div>
        </div>
        <Footer />
      
    </div>
  )
}
