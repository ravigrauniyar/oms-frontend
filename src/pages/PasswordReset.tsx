import { Col, Row } from 'react-bootstrap'
import Layout from './Layout'
import PasswordResetForm from '../components/PasswordResetForm'

// Reset password page
function PasswordReset() 
{
  return (
    <Layout>
        <Row>
            <Col className='form-container mx-auto'>
                <PasswordResetForm />
            </Col>
        </Row>        
    </Layout>
  )
}

export default PasswordReset