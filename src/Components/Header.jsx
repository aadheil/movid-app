import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-success">
        <Container>
          <Navbar.Brand className='fw-bolder fs-4'>
            <Link to={'/'} style={{textDecoration:'none',color:'#CACACA'}}>
          <img style={{width:'50px',height:'50px'}} src="https://cdn3.iconfinder.com/data/icons/web-hosting-flat-color-set-4/55/video__play__streaming__playlist_-512.png" alt="" />
            {' '}
            <span className='ms-2'>MoviD </span>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header