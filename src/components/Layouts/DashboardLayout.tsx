import { Row, Col, Container } from 'react-bootstrap'
import { ReactNode } from 'react';
import DashboardNavbar from '../Navigation/DashboardNavbar';

interface GeneralLayoutProps 
{
    children: ReactNode;
}

// Template for all pages
const DashboardLayout = ({ children }: GeneralLayoutProps) => 
{
    return (
        <Container fluid 
            className='dashboard-landing-page flex-center vh-100'
        >
            <Row>
                <Col>
                    <DashboardNavbar />
                </Col>
            </Row>
            { children }
        </Container>
  )}
  export default DashboardLayout