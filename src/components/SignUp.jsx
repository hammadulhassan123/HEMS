import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AuthUser from '../AuthUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { toast } from 'react-toastify';

export default function SignIn() {
    const navigate = useNavigate();
    const { http } = AuthUser();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitForm = (e) => {
      
        e.preventDefault();
      // Check if passwords match
      if (password !== confirmPassword) {
        toast.error("Passwords do not match!");
        return;
      }
        // API call
        http.post('/register', {
            email: email,
            name: name,
            password: password,
            c_password: confirmPassword // Passing confirmPassword in the request
        }).then((res) => {
            console.log("Signup Success");
            console.log(res);
            navigate('/signin');
        }).catch((error) => {
            console.error('Error:', error);
            // Handle error, show error message, etc.
        });
    };

    return (
        <Container className="pt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <div className="card p-4">
                    <div className="section-header justify-content-center text-center mb-3" >
                      <mark className="teamHead">SignUp <FontAwesomeIcon icon={faUser}/></mark>
                    </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address:</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formConfirmPassword">
                                <Form.Label>Confirm Password:</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </Form.Group>
                            <div className="card-footer">
                                <Button variant="outline-primary" type="submit" className="m-3 btn-md" onClick={submitForm}>
                                SignUp
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
