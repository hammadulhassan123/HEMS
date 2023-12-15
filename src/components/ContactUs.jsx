import React, { useState } from 'react';
import { Row, Container, Col, Button, Form } from 'react-bootstrap';
import { faEnvelope, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/home.css';

export default function ContactUs() {
  const [formResponse, setFormResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      contactNo: e.target[2].value,
      query: e.target[3].value,
    };
    console.log('Form Data:', formData);
    setFormResponse(formData);
    alert('Form submitted successfully!');
  };

  return (
    <>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col md={6} >
              <div className="section-header text-center pb-5 mt-5">
                <mark className='teamHead'>Contact Us<FontAwesomeIcon icon={faPhoneFlip} color='black' fade/></mark>             
              </div>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col className='contactForm' md={6} >  
              <Form className='contactBody' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleInputName">
                  <Form.Label><h4> Name :</h4></Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><h4>Email :</h4></Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleInpuPhone">
                  <Form.Label><h4>Contact No :</h4></Form.Label>
                  <Form.Control type="Phone" placeholder="Enter Your Contact No" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="query">
                  <Form.Label><h4>Querry :</h4></Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Enter your query" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button className='contactBtn ' variant="outline-success" size='lg' type="submit">
                    Submit <span><FontAwesomeIcon icon={faEnvelope} /></span>
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
