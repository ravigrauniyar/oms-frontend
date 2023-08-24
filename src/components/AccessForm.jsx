import { React, Component } from "react";
import FormValidation from "../services/FormValidation";
import LoginRequest from "../services/LoginRequest";
import '../assets/styles/AccessForm.css';

class AccessForm extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            sendLoginRequest: false,
            isValid: false,
            email: '',
            password: '',
            errors: {
                email: '',
                password: '',
                display: 'hidden-element'
            }
        };
    }

    handleSubmit = async (e) => 
    {
        e.preventDefault();

        const email = e.target.email.value; 
        const password = e.target.password.value; 
        
        var { isValid, errors } = FormValidation.validateForm(email, password);
        if(!isValid)
        {
            errors.display = '';
            this.setState({ errors });
        } 
        else 
        {
            var sendLoginRequest = true;
            this.setState({ email, password, sendLoginRequest });
        }
    }
    render()
    {
        const {sendLoginRequest, errors } = this.state;
        if( sendLoginRequest === false ){
            return (

                <div className="access-form-container flex-center">
                    <div className="access-form-header">
                        Login Form
                    </div>
                    <div className="access-form-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">email</label>
                                <input 
                                    type="text" className="form-control" 
                                    id="email" placeholder="user@example.com"
                                />
                            </div>
                            {
                                errors.email !== '' && (
                                    <div className={`access-form-errors ${errors.display}`}>
                                        <span>{errors.email}</span>
                                    </div>
                                )
                            }
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" className="form-control" 
                                    id="password" placeholder="your-password"
                                />
                            </div>
                            {
                                errors.password !== '' && (
                                    <div className={`access-form-errors ${errors.display}`}>
                                        <span>{errors.password}</span>
                                    </div>
                                )
                            }
                            <button type="submit" className="access-form-button">Sign In</button>
                        </form>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div className="access-form-container flex-center">
                    <LoginRequest email = {this.state.email} password = {this.state.password} />
                </div>
            )
        }
    }
}
export default AccessForm;