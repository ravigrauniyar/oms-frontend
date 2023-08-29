import { Row, Col } from 'react-bootstrap'
import NavbarComponent from '../components/NavbarComponent'
import { ReactNode } from 'react';

interface LayoutProps 
{
    children: ReactNode;
}

// Template for all pages
const Layout = ({ children }: LayoutProps) => 
{
    return (
    <>
        <Row>
            <Col>
                <NavbarComponent />
            </Col>
        </Row>
        { children }
    </>
  )}
  export default Layout