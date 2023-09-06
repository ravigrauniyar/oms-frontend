import { Col, Row } from 'react-bootstrap'
import AccessForm from '../components/Forms/AccessForm'
import GeneralLayout from '../components/Layouts/GeneralLayout'

function Access() {
  return (
    <GeneralLayout>
        <Row>
            <Col className='form-container mx-auto'>
                <AccessForm />
            </Col>
        </Row>        
    </GeneralLayout>
  )
}

export default Access