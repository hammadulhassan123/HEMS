import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import "./styles/home.css"

export default function Footer() {
  return (
    <>
        <footer className="footer bg-dark text-light p-4 " style={{ zIndex: 1 }}>
            <Container>
                <Row>
                <Col md={4} className="text-uppercase" style={{ fontSize: 'large',fontWeight:"bold" }}>
                    <h3>
                    <span className="text-success">HE</span>MS
                    </h3>
                </Col>
                <Col md={4} className="text-center">
                    <p>All Rights Reserved &copy;HEMS-2023</p>
                </Col>
                <Col md={4} className="text-end fEnd">
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
                </Col>
                </Row>
            </Container>
        </footer>
    </>
  )
}
