import React from 'react'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Avocado from '@components/SVGIcons/Avocado'


const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link href="/">
          <a>
            <Avocado/>
            Avo Store
          </a>
        </Link>
      </Navbar.Brand>
    </Navbar>
  )
}

export default CustomNavbar
