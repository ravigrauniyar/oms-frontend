import { Container, Nav, Navbar } from "react-bootstrap"
import { FaInstagram, FaFacebook, FaTwitter, FaUserAlt } from "react-icons/fa"

function NavbarComponent() 
{
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
            <Nav.Link href="/">About Us</Nav.Link>
            <Nav.Link href="/">Services</Nav.Link>
            <Nav.Link href="/">Doctors</Nav.Link>
          </Nav>
          {/* Socials links */}
          <Nav>
              <Nav.Link href="/"><FaInstagram /></Nav.Link>
              <Nav.Link href="/"><FaTwitter /></Nav.Link>
              <Nav.Link href="/"><FaFacebook /></Nav.Link>
              <Nav.Link href="/"><FaUserAlt /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent