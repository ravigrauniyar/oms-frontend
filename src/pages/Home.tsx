import { Col, Container, Row } from 'react-bootstrap'
import Cookies from "js-cookie"
import { useEffect, useState } from 'react'
import { PersonView } from '../models/Views/PersonView'
import GeneralLayout from '../components/Layouts/GeneralLayout'

// Landing page
function Home() 
{
  const [username, setUsername] = useState('')

  useEffect(() => 
  {
    if (Cookies.get('user') !== undefined) 
    {
      const user: PersonView = JSON.parse(Cookies.get('user')!)
      setUsername(user.firstName + ' ' + user.lastName)
    }
  }, [])

  return (
    <GeneralLayout>
        <Row>
            <Col className='form-container mx-auto'>
                <Container className='h4'>Welcome to OMS
                  {(username !== '') && ', ' + username}
                !</Container>
            </Col>
        </Row>        
    </GeneralLayout>
  )
}

export default Home