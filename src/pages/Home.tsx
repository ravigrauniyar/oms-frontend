import { Col, Row } from 'react-bootstrap'
import AccessForm from '../components/AccessForm'
import Layout from './Layout'

// Landing page
function Home() 
{
  return (
    <Layout>
        <Row>
            <Col className='form-container mx-auto'>
                <AccessForm />
            </Col>
        </Row>        
    </Layout>
  )
}

export default Home