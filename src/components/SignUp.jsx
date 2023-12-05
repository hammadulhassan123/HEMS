import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import "../App.css"

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
    fetch('http://localhost:8000/api/register', {
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
    <>

      <Container>
        <Row className="signupForm justify-content-center">
            <Col md={12}>
               <div className="section-header justify-content-center text-center mt-4 mb-3" >
                   <mark className="teamHead">New? SignUp <FontAwesomeIcon icon={faUserPlus}/></mark>
               </div>
            </Col>
          <Col >
            <Form id="registrationForm" onSubmit={handleSubmit} md={6} lg={8} className='signupForm' style={{border:"2px solid black"}}>
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
              <Button variant="outline-primary" type="submit" className='m-2'>
                Register
              </Button>
              <div className="mt-3" id="response">
                {response && <pre>{response}</pre>}
              </div>
              <div className="error-message" id="errorMessage">
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
