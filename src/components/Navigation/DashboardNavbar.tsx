import { useState } from "react"
import { Container, Form, Nav, Navbar } from "react-bootstrap"
import {FaUserAlt, FaSearch, FaRegBell,FaCog } from "react-icons/fa"

function DashboardNavbar() 
{  
  const [searchKeyword, setSearchKeyword] = useState('')
  const handleSearch = () => {
    searchKeyword
  }
  return (
    // Navigation
    <Navbar expand="lg" className="navbar-container w-100">
      <Container fluid className="mx-4">
        {/* Logo and Name */}
        <Navbar.Brand href="/" className="letter-spacing title-text">
            <img
              alt="Logo"
              src="../src/assets/images/logo.svg"
              className="d-inline-block align-top logo"
            />
            OMS
        </Navbar.Brand>

        {/* Toggler to make Navbar Responsive */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse className="mx-4 flex-center justify-content-between" id="basic-navbar-nav">
          {/* Pages to navigate */}
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Services</Nav.Link>
            <Nav.Link href="/">Doctors</Nav.Link>
            <Nav.Link href="/">Appointments</Nav.Link>
          </Nav>
          {/* Socials links */}
          <Nav>
              <Form className="col d-flex">
                <Form.Group className="d-flex align-items-center" controlId="searchKeyword">
                    <Form.Control type="text" placeholder="Enter keywords..." 
                                    onChange={(e) => setSearchKeyword(e.target.value)} />

                </Form.Group>
                <Nav.Link onClick={handleSearch}><FaSearch/></Nav.Link>
              </Form>
              <Nav.Link href="/notifications"><FaRegBell /></Nav.Link>
              <Nav.Link href="/profile"><FaUserAlt /></Nav.Link>
              <Nav.Link href="/profile"><FaCog /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default DashboardNavbar