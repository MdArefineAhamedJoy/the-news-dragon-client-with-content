import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Login = () => {
    const {singIn , userProfiles} = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/category/0'
  

    const handelSingIn = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value 
        const password = form.password.value
        singIn(email,password)
        .then(res =>{
            const createUser = res.user 
            console.log(createUser)
            navigate(from,{replace : true})
            form.reset()
            setSuccess("Login Success")
            setError('')
        })
        .catch(error => {
            setSuccess('')
            setError("Login is not valid")
        })
    }
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handelSingIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <Form.Text className="text-success">
                    {success}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;