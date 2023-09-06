import { Row, Col, Container } from 'react-bootstrap'
import { ReactNode } from 'react';
import GeneralNavbar from '../Navigation/GeneralNavbar';

interface GeneralLayoutProps 
{
    children: ReactNode;
}

// Template for all pages
const GeneralLayout = ({ children }: GeneralLayoutProps) => 
{
    return (
        <Container fluid 
            className='app-landing-page flex-center vh-100'
        >
            <Row>
                <Col>
                    <GeneralNavbar />
                </Col>
            </Row>
            { children }
        </Container>
  )}
  export default GeneralLayout