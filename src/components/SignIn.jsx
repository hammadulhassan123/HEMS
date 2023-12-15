import React, { useState } from 'react';
import { Container,Row, Col,Form, Button, Card} from 'react-bootstrap';
import AuthUser from '../AuthUser';
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const SignIn = () => {
  // const navigate = useNavigate();
  const {http,setToken} = AuthUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex pattern

  const errCheck = () => {
    if (email === '' || email === null) {
      alert('Enter Email');
      return false;
    } else if (!emailRegex.test(email)) {
      alert('Enter a valid Email');
      return false;
    }
    
    if (password === '' || password === null) {
      alert('Enter Password');
      return false;
    } 
    
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!errCheck()){
      return;
    };
    try{
      http.post('/login', {email:email, password:password}).then((res)=>{
        console.log(res.data);
        const { data, message, success } = res.data;
        if (success) {
          // Extract user details and token from response
          const { token, ...userData } = data;
          // Storing token and user details in localStorage
          setToken(userData, token);
          toast.success(message,{
            position:toast.POSITION.TOP_RIGHT
          });
        } else {
          toast.warning(message,{
            position:toast.POSITION.TOP_RIGHT
          });
          setErrorMessage('Login Failed');
        }
        // toast.success("Login Success");
      })
    }catch(error){
      console.error('Error:', error);
      toast.warning("Login Failed",{
        position: toast.POSITION.TOP_RIGHT
      });
      setErrorMessage('An error occurred. Please try again.');
    }
  

  };

  return (
    <>
      <Container className="mt-3">
        <Row className="justify-content-center">
              
          <Col md={6} className="signinForm"  >
            <Form onSubmit={handleSubmit}>
              <Card className='signCard'>
                <Card.Header className='signhead' >
                    <div className="section-header justify-content-center text-center text-light p-4" >
                      <h2>Sign-In to your Account <FontAwesomeIcon icon={faUser}/></h2>
                    </div>
                </Card.Header>
                <Card.Body>
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
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-primary" type="submit" className="m-3 signBtn">
                    Sign In <FontAwesomeIcon icon={faArrowRightToBracket} />
                  </Button>
                </Card.Footer>
              </Card>
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
