import React from 'react'
import Showcase from '../component/Showcase.jsx'
import Project from '../component/Project.jsx'
import Services from '../component/Services.jsx'
import Gallery from '../component/Gallery.jsx'
import ContactForm from '../component/ContactForm.jsx'
import Footer from '../component/Footer.jsx'
import Navbar from '../component/navbar.jsx'
import '../../assets/css/estilos.css'

export default function Homepages() {
  return (
    <div>
        <Navbar />
        <Showcase />
        <Services />
        <Project />
        <Gallery />
        <ContactForm />
        <Footer />
    </div>
  )
}
