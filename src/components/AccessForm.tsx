import { Button, Col, Form, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import { AccessRequest } from "../models/AccessRequest"
import { useNavigate } from "react-router-dom"
import { ApiResponse } from "../models/ApiResponse"
import AccessRequestHandler from "../services/AccessRequestHandler"
import ClaimHandler from "../services/ClaimHandler"
import Cookies from "js-cookie"
import { PersonView } from "../models/PersonView"

const AccessForm = () => 
{
    // Initialize states for event handling
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('user') !== undefined)
    const navigate = useNavigate()

    // Initialize the body for post request for login
    const requestBody : AccessRequest = {
        deviceToken: "string",
        email: email,
        password: password
    }
    useEffect(()=>
    {
        if(isLoggedIn)
        {
            const user : PersonView = JSON.parse(Cookies.get('user')!)
            // Redirect to PasswordReset page if first time login
            if(user.requiresPasswordReset)
            {
                navigate('/reset-password')
            }
            else
            {
                navigate('/access')
            }
        }
    }, [isLoggedIn])

    const handleLogoutRequest = () => 
    {
        Cookies.remove('user')
        setIsLoggedIn(false)
    }
    // Method triggered when Sign in button is clicked
    const handleAccessRequest = async () => {
        try
        {
            // Use AccessRequestHandler to make API call for login
            const response = await AccessRequestHandler.handleLogin<ApiResponse<string>>(requestBody)
            
            // Alter states based on response
            setMessage(response.message)

            if(response.isSuccess)
            {
                const expiryTime = ClaimHandler.getExpireTime(response.value)!
                const user : PersonView = ClaimHandler.getUser(response.value)
                Cookies.set('user', JSON.stringify(user), expiryTime)
                setIsLoggedIn(true)
            }
        }
        // Handle exceptions
        catch(error) {
            setMessage("Access request message!")
        }
    }
    // Show access form when not logged in
    if(!isLoggedIn)
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
                    message && <span className="text-danger fs-6">{message}</span>
                }
            </Form>
        )
    }
    // Redirect if token is valid
    else
    {
        return( 
            <>
                <p className="text-success">You're logged in!</p>
                <Button className="w-100" variant="dark" onClick={handleLogoutRequest}>
                    Log out
                </Button>
            </>
        )
    }
}
export default AccessForm