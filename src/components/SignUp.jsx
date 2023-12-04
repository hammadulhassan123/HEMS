import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    c_password: '',
  });

  const [response, setResponse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = () => {
    // fetch('http://192.168.57.239/api/register', {
    fetch('http://192.168.234.239/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.error) {
          setErrorMessage(responseData.error);
          setResponse('');
        } else {
          setResponse(JSON.stringify(responseData, null, 2));
          setErrorMessage('');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage('An error occurred. Please try again.');
        setResponse('');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  };

  return (
    <Container>
      <h1 className="mt-3">Registration Form</h1>
      <Form id="registrationForm" onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="c_password">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                name="c_password"
                value={formData.c_password}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <div className="mt-3" id="response">
          {response && <pre>{response}</pre>}
        </div>
        <div className="error-message" id="errorMessage">
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </div>
      </Form>
    </Container>
  );
};

export default SignUp;
