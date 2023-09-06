
import { Button, Col, Form, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { PasswordResetRequest } from "../../models/PasswordResetRequest"
import { ApiResponse } from "../../models/ApiResponse"
import PasswordResetHandler from "../../services/PasswordResetHandler"
import { PersonView } from "../../models/PersonView"

function PasswordResetForm() 
{
    // Initialize states for password reset
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [resetMessage, setResetMessage] = useState('')
    const [resetSuccess, setResetSuccess] = useState(false)
    const [logsOut, setLogsOut] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        if(logsOut)
        {
            navigate('/access')
        }
    },[logsOut])

    const handleLogoutRequest = () => 
    {
        Cookies.remove('user')
        setLogsOut(true)
    }
    // Method triggered when Submit button is clicked
    const handlePasswordReset = async () => 
    {
        try
        {
            // Initialize body for put request for password reset
            const requestBody : PasswordResetRequest = {
                newPassword: newPassword,
                confirmPassword: confirmPassword
            }
            // Access token from session
            const user = JSON.parse(Cookies.get('user')!)

            // Access user's email using Claim handler
            const email: string = user.email

            // Use PasswordResetHandler to make API call for password reset
            var response = await PasswordResetHandler
                                .handlePasswordReset<ApiResponse<PersonView>>(requestBody, email)

            // Alter states based on response
            setResetMessage(response.message)
            if(response.isSuccess)
            {
                const userString = JSON.stringify(response.value)
                Cookies.set('user', userString)
                setResetSuccess(!response.value.requiresPasswordReset)
            }
        } 
        catch (error) {
            setResetMessage('Password reset failed!')
        }
    }
    // Show form if password not reset
    if(Cookies.get('user') !== undefined && !resetSuccess)
    {
        return (
            <Form>
                <Row className='text-center title-text'>
                    <Col>
                        Password Reset
                    </Col>
                </Row>
                <Form.Group controlId="password" className="form-vertical-margin">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" onChange={(e) => setNewPassword(e.target.value)} />
                </Form.Group>

                <Form.Group  controlId="re-password" className="form-vertical-margin">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                </Form.Group>
                <Row className="justify-content-around">
                    <Button className="col-5 w-40" variant="dark" onClick={handlePasswordReset}>
                        Submit
                    </Button>
                    <Button className="col-5 w-40" variant="dark" onClick={handleLogoutRequest}>
                        Logout
                    </Button>
                </Row>
                {
                    <span className="text-danger small">{resetMessage}</span>
                }
            </Form>
        )
    }
    // Show success message if password reset was successful
    else if(Cookies.get('user') !== undefined && resetSuccess){
        return(
            <>
                <p className="text-success">Password reset successful!</p>
                
                <Link to={'/dashboard'}>
                    Go to Dashboard
                </Link>
            </>
        )
    }
}

export default PasswordResetForm