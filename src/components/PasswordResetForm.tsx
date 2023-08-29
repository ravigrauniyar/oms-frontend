import { Button, Col, Form, Row } from "react-bootstrap"
import { useState } from "react"
import { ApiResponse } from "../models/ApiResponse"
import { PasswordResetRequest } from "../models/PasswordResetRequest"
import PasswordResetHandler from "../services/PasswordResetHandler"
import ClaimHandler from "../services/ClaimHandler"

function PasswordResetForm() 
{
    // Initialize states for password reset
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [resetError, setResetError] = useState('')
    const [resetSuccess, setResetSuccess] = useState(false)

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
            const token = sessionStorage.getItem('token')!
            // Access user's email using Claim handler
            const email: string = ClaimHandler.getUser(token).email

            // Use PasswordResetHandler to make API call for password reset
            var response = await PasswordResetHandler.handlePasswordReset<ApiResponse<string>>(requestBody, email)

            // Alter states based on response
            setResetSuccess(response.isSuccess)
            setResetError(response.message)
        } 
        catch (error) {
            setResetError('Password reset failed!')
        }
    }
    // Show form if password not reset
    if(!resetSuccess){
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

                <Button className="w-100" variant="dark" onClick={handlePasswordReset}>
                    Submit
                </Button>
                {
                    <span className="text-danger small">{resetError}</span>
                }
            </Form>
        )
    }
    // Show success message if password reset was successful
    else{
        return(
            <p className="text-success">Password reset successful!</p>
        )
    }
}

export default PasswordResetForm