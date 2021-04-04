import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import Container from 'react-bootstrap/Container'
import Footer from '@components/Footer/Footer'

const Layout:React.FC = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container fluid="md" className="py-5" >
            {children}
            </Container>
            <Footer/>
        </>
    )
}

export default Layout
