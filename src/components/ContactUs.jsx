import React from 'react'
import { Row,Container,Col,Button,Form } from 'react-bootstrap'

export default function ContactUs() {
  return (
    <>
      <section>
        <Container>
          <h1>Feel Free to Contact Us</h1>  
            <Row md={12} lg={6}>
                <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}
