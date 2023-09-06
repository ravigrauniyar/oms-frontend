import Layout from './Layout'
import { Col, Row } from 'react-bootstrap'
import AccessForm from '../components/AccessForm'

function Access() {
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

export default Access