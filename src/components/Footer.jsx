import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footers = () => (
  <footer className=" footer text-white bg-dark">
    <Container className='pt-3 mt-2'>
      <Row className="justify-content-center">
        <Col md={4}>
            <h2>
                <span className="text-success">HE</span>MS
            </h2>
            <p>Reducing Electricity Costs with Smart Scheduling and Renewable Energy.</p>
        </Col>
        <Col md={4} className='fEnd'>
          <h4>Follow Us</h4>
          <p>
            <a href="https://www.facebook.com/" target='blank' className="text-light text-capitalize ms-3" >
                <FontAwesomeIcon icon={faFacebook} size='2x'/>
            </a>
            <a href="https://twitter.com/?lang=en" target='blank' className="text-light ms-3">
                <FontAwesomeIcon icon={faXTwitter} size='2x'/>
            </a>
            <a href="https://www.linkedin.com/" target='blank' className="text-light ms-3">
                <FontAwesomeIcon icon={faLinkedin} size='2x'/>
            </a>
            <a href="https://www.instagram.com/" target='blank' className="text-light ms-3">
                <FontAwesomeIcon icon={faInstagram} size='2x'/>
            </a>
          </p>
        </Col>
        <Col md={4}>
          <h4>Contact Us</h4>
          <p>
            NUML, H-9, ISL, Pakistan
            &copy; {new Date().getFullYear()} HEMS</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footers;
