import { Col, Row } from 'react-bootstrap'
import PasswordResetForm from '../components/Forms/PasswordResetForm'
import GeneralLayout from '../components/Layouts/GeneralLayout'

// Reset password page
function PasswordReset() 
{
  return (
    <GeneralLayout>
        <Row>
            <Col className='form-container mx-auto'>
                <PasswordResetForm />
            </Col>
        </Row>        
    </GeneralLayout>
  )
}

export default PasswordReset