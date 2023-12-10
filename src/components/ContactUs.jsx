import { faDatabase, faMailForward, faMobile, faPhoneFlip} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Row,Container,Col,Button,Form } from 'react-bootstrap'
import "./styles/home.css"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  }; 
  return (
    <>
      <section >
      <Container>
            <Row>
                <Col md={12} className="">
                  <div className="section-header text-center pb-5 mt-5">
                  <mark className='teamHead'>Contact Us<FontAwesomeIcon icon={faPhoneFlip} color='black' fade/></mark>             
                  </div>
                </Col>
           </Row>
           <Row className='justify-content-center'>
                <Col className='contactForm' md={6} >  
                <Form className='contactBody'>
                    <Form.Group className="mb-3" controlId="exampleInputName">
                      <Form.Label> <h4> Name :</h4></Form.Label>
                      <Form.Control type="text" placeholder="Enter Your Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label><h4>Email :</h4></Form.Label>
                      <Form.Control type="email" placeholder="Enter Your Email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleInpuPhone">
                      <Form.Label> <h4>Contact No :</h4></Form.Label>
                      <Form.Control type="Phone" placeholder="Enter Your Contact No" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="query">
                      <Form.Label> <h4>Querry :</h4> </Form.Label>
                      <Form.Control as="textarea" rows={5} placeholder="Enter your query" />
                    </Form.Group>
                      <div className="d-grid gap-2">
                        <Button className='contactBtn ' variant="outline-success" size='lg' type="submit" onClick={handleSubmit}>
                          Submit <span>
                          <FontAwesomeIcon icon={faEnvelope}  />
                          </span>
                        </Button>
                      </div>
                </Form>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}
