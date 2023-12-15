import React from 'react'
import { Accordion,Row,Col,Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/home.css"
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'

export default function Faq() {
  return (
    <>
      <section>
        <Container className="mt-5 pb-5 faq">
          <Row className="faqHead">
            <Col md={12} className="pt-2 pb-2 text-light text-center">
              <b>
                <h1>
                  FAQ's <FontAwesomeIcon icon={faQuestionCircle} />{" "}
                </h1>
              </b>
            </Col>
          </Row>

          <Row>
            <Col md={12} className="mt-2">
              <Accordion className="faqMain">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h4>
                      How does the project aim to reduce electricity bills?
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    The project focuses on reducing electricity bills through
                    smart load scheduling facilitated by a website and mobile
                    app. This involves implementing algorithms and user input
                    for optimal usage of appliances, along with renewable energy
                    sources.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h4> What technologies are used in this project?</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    The project utilizes React for website development, Flutter
                    for mobile app creation, PHP Laravel for backend APIs, and
                    the ESP8266 microchip for hardware implementation, enhancing
                    user control over appliances.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h4>
                      {" "}
                      How does the hardware component (ESP8266) function within
                      the project?
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    The ESP8266 is responsible for implementing the scheduling
                    algorithm by managing Wi-Fi setup, generating unique user
                    codes, and controlling selected appliances based on user
                    inputs via the website and mobile app.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <h4>
                      What features are available on the website and mobile app?
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    Both the website and mobile app offer functionalities for
                    user registration, login, location access, and appliance
                    control. Users can input their comfort preferences,
                    appliance schedules, and manage devices remotely through the
                    app or website.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
