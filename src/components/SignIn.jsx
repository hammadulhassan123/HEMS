import React, { useState } from 'react';
import { Container,Row, Col,Form, Button, Alert } from 'react-bootstrap';
import AuthUser from '../AuthUser';
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignIn = () => {
  // const navigate = useNavigate();
  const {http,setToken} = AuthUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 

  const handleSubmit = (event) => {
    event.preventDefault();
    try{
      http.post('/login', {email:email, password:password})
      .then((res)=>{
        setToken(res.data.user, res.data.access_token);
        //  console.log(res.data);
        // toast.success("Login Success");
      })
    }catch(error){
      console.error('Error:', error);
      toast.err("Login Failed")
      setErrorMessage('An error occurred. Please try again.');
    }
  
    // fetch() method
  //   try {
  //     const response = await fetch('http://localhost:8000/api/login', {
  //       method: 'POST',
  //       mode: 'cors',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();

  //     if (data.error) {
  //       setErrorMessage(data.error);
  //     } else {
  //       // Implement your logic for successful login (e.g., redirect, store token)
  //       // This example just displays the response for demo purposes
  //       console.log('Login successful!', data);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setErrorMessage('An error occurred. Please try again.');
  //   }
  };

  return (
    <>
      <Container className="mt-3">
        <Row className="justify-content-center">
              <div className="section-header justify-content-center text-center mt-5 mb-3" >
                 <mark className="teamHead">Sign-In to your Account <FontAwesomeIcon icon={faUser}/></mark>
              </div>
          <Col md={6} className="signinForm" style={{border:"2px solid black"}} >
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>

              <Button variant="outline-primary" type="submit" className="m-3">
                Sign In
              </Button>
            </Form>

            {errorMessage && (
              <Alert variant="danger">
                {errorMessage}
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignIn;
