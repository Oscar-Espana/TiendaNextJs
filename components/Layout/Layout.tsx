import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import Container from 'react-bootstrap/Container'

const Layout:React.FC = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container fluid="md" className="py-5" >
            {children}
            </Container>
            <footer>Mi footer</footer>
        </>
    )
}

export default Layout
