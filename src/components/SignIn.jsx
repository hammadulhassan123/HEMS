import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import"./styles/home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signin logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
    <Container>
      <Row>
        <Col md={12}>
        </Col>
      </Row>

        <Row className="justify-content-center">
              <div className="section-header justify-content-center text-center mt-5 mb-3" >
                  <mark className="teamHead">Sign-In to your Account <FontAwesomeIcon icon={faUser}/></mark>
              </div>
          <Col md={6} className="signinForm" style={{border:"2px solid black"}}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="m-3">
                Sign In
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
