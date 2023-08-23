import React, { Component } from 'react';

class LoginRequest extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {
            data: null,
            loading: true,
            error: null,
        };
    }
    fetchData = async (requestBody) => {
        try {
            const response = await fetch('http://172.167.64.72/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error('Bad request!');
            }

            const jsonData = await response.json();
            return jsonData;
        } catch (err) {
            throw err;
        }
    };
    componentDidMount() 
    {
        const { email, password } = this.props;
        const requestBody = {
            deviceToken: 'string',
            email: email,
            password: password
        };
        this.fetchData(requestBody)
            .then((jsonData) => {
                this.setState({
                    data: jsonData,
                    loading: false,
                    error: null,
                });
            })
            .catch((err) => {
                this.setState({
                    error: err,
                    loading: false,
                });
            });
    }
    render() {
        const { data, loading, error } = this.state;

        if (loading) {
            return <h2>Loading...</h2>;
        }
        if (error) {
            return <h2>Error: {error.message}</h2>;
        }
        if (!data) {
            return null;
        }
        return (
            <h2>Login Successful!</h2>
        );
    }
}

export default LoginRequest;
