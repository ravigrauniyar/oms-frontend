import { Button, Col, Form, Row } from "react-bootstrap"
import { useState } from "react"
import AccessRequestHandler from "../services/AccessRequestHandler"
import { AccessRequest } from "../models/AccessRequest"
import { useNavigate } from "react-router-dom"
import { ApiResponse } from "../models/ApiResponse"
import ClaimHandler from "../services/ClaimHandler"

function AccessForm() 
{
    // Initialize states for event handling
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [error, setError] = useState('')
    const [loginSuccess, setLoginSuccess] = useState(false)
    const navigate = useNavigate()

    // Initialize the body for post request for login
    const requestBody : AccessRequest = {
        deviceToken: "string",
        email: email,
        password: password
    }
    // Method triggered when Sign in button is clicked
    const handleAccessRequest = async () => {
        try
        {
            // Use AccessRequestHandler to make API call for login
            const response = await AccessRequestHandler.handleLogin<ApiResponse<string>>(requestBody)
            
            // Alter states based on response
            setLoginSuccess(response.isSuccess)
            setError(response.message)

            if(response.isSuccess)
            {
                setToken(response.value)
            }
        }
        // Handle exceptions
        catch(error) {
            setLoginSuccess(false)
            setError("Access request error!")
        }
    }
    // Show access form when not logged in
    if(!loginSuccess)
    {
        return (
            <Form>
                <Row className='text-center title-text'>
                    <Col>
                        Access Panel
                    </Col>
                </Row>
                <Form.Group controlId="email" className="form-vertical-margin">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="user@example.com" 
                                    onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group  controlId="password" className="form-vertical-margin">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password@example" 
                                    onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                
                <Button className="w-100" variant="dark" onClick={handleAccessRequest}>
                    Sign In
                </Button>
                {
                    error && <span className="text-danger fs-6">{error}</span>
                }
            </Form>
        )
    }
    // Redirect if token is valid
    else if( loginSuccess && token !== '' )
    {
        // Access token from session
        sessionStorage.setItem('token', token)
        // Access User's information using ClaimHandler
        const user = ClaimHandler.getUser(token)

        // Redirect to PasswordReset page if first time login
        if(user.requiresPasswordReset)
        {
            navigate('/reset-password')
        }
        // Show welcome message if user is logged in
        else
        {
            return <p className="text-success">Welcome {user.firstName + ' ' + user.lastName} </p>
        }
    }
    // Handle expired session
    else
    {
        return <p className="text-danger"> Session ended! </p>
    }
}
export default AccessForm