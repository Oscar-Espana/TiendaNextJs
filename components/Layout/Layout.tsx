import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import Container from 'react-bootstrap/Container'

const Layout:React.FC = ({children}) => {
    return (
        <div>
            <Navbar/>
            <Container fluid="md">
            {children}
            </Container>
            <footer>Mi footer</footer>
        </div>
    )
}

export default Layout
