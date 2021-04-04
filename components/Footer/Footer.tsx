import React from 'react'
import Avocado from '@components/SVGIcons/Avocado'

const Footer = () => {
    return (
        <footer className="bg-dark py-5 text-white d-flex flex-column align-items-center" >
            <Avocado/>
            <p className="text-center pt-3" >Realizado con Next JS y React Bootstrap</p>
            <h5 className="text-center" >Desarrollador por 
                <span className="font-weight-bold text-primary"> Oscar España</span>
            </h5>
        </footer>
    )
}

export default Footer
