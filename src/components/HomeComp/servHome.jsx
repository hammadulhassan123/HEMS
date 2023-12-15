import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar, faHome, faPlug, faPeopleGroup, faBalanceScale, faDatabase, faHandHoldingDollar, faArrowCircleDown, faUsersViewfinder, faSolarPanel, faHouseLaptop,} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../styles/home.css"
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

export default function ServHome() {
  
  const [showText, setShowText] = useState([false, false, false, false]);

  const hideNShow = (index) => {
    const updatedShowText = [...showText];
    updatedShowText[index] = !updatedShowText[index];
    setShowText(updatedShowText);
  };

  return (
    <>
      <section className="services section-padding">
        <Container>
          <Row>
            <Col md={12} className="">
              <div className="section-header text-center pb-5 mt-5">
                <mark className="teamHead">
                  Our Services{" "}
                  <FontAwesomeIcon icon={faDatabase} color="black" />
                </mark>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={3} md={12} className="col-12 ">
              <Card className="text-center pb-2 servhome sh1">
                <Card.Header>
                  <FontAwesomeIcon
                    className="card-icon text-dark"
                    icon={faBalanceScale}
                    size="2x"
                  />
                  <Card.Title>
                    {" "}
                    <h4>Smart Load Scheduling</h4>
                  </Card.Title>
                </Card.Header>
                <Card.Body className="servBody" id="card1">
                    <Card.Img
                      src="src/assets/3.png"
                      className="servImg mt-2 mb-1"
                      variant="top"
                      style={{ borderRadius: "10px", height: "30vh" }}
                    />
                </Card.Body>
                <Card.Footer>
                  <Button
                    className="servBtn"
                    variant="outline-success"
                    onClick={() => hideNShow(0)}
                  >
                    Click To Learn More{" "}
                    <FontAwesomeIcon icon={faArrowCircleDown} />
                  </Button>
                  <Card.Text
                    className="text-start ms-2 me-2 servText"
                    style={{ display: showText[0] ? "block" : "none" }}
                  >
                    Optimize electricity consumption through intelligent
                    scheduling algorithms. Efficiently manage appliance usage to
                    reduce electricity bills.
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={3} md={12} className="col-12">
              <Card className="text-center pb-2 servhome sh2">
                <Card.Header>
                  <FontAwesomeIcon
                    className="card-icon text-dark"
                    icon={faUsersViewfinder}
                    size="2x"
                  />
                  <Card.Title>
                    <h4>User Friendly Interface</h4>
                  </Card.Title>
                </Card.Header>
                <Card.Body className="cardBody" id="card2">
                  <Card.Img
                    src="src/assets/mobile interface.jpg"
                    className="servImg mt-2 mb-1"
                    variant="bottom"
                    style={{ borderRadius: "10px", height: "30vh" }}
                  />
                </Card.Body>
                <Card.Footer>
                  <Button
                    className="servBtn"
                    variant="outline-success"
                    onClick={() => hideNShow(1)}
                  >
                    Click To Learn More{" "}
                    <FontAwesomeIcon icon={faArrowCircleDown} />
                  </Button>
                  <Card.Text
                    className="text-start ms-2 me-2 servText"
                    style={{ display: showText[1] ? "block" : "none" }}
                  >
                    Access the project seamlessly through a user-friendly
                    website and mobile app. Register, control appliances, and
                    manage energy with ease.
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={3} md={12} className="col-12">
              <Card className="text-center pb-2 servhome sh3">
                <Card.Header>
                  <FontAwesomeIcon
                    className="card-icon text-dark"
                    icon={faHouseLaptop}
                    size="2x"
                  />
                  <Card.Title>
                    <h4>Remote Appliance Control</h4>
                  </Card.Title>
                </Card.Header>
                <Card.Body className="servBody" id="card3">
                  <Card.Img
                    src="src/assets/hero.png"
                    className="servImg mt-2 mb-1"
                    variant="top"
                    style={{ borderRadius: "10px", height: "30vh" }}
                  />
                </Card.Body>
                <Card.Footer>
                  <Button
                    className="servBtn"
                    variant="outline-success"
                    onClick={() => hideNShow(2)}
                  >
                    Click To Learn More{" "}
                    <FontAwesomeIcon icon={faArrowCircleDown} />
                  </Button>
                  <Card.Text
                    className="text-start ms-2 me-2 servText"
                    style={{ display: showText[2] ? "block" : "none" }}
                  >
                    Empower users to remotely control appliances. Turn devices
                    on/off through the mobile app and webapp, providing
                    convenience and energy efficiency.
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={3} md={12} className="col-12">
              <Card className="text-center pb-2 servhome sh4">
                <Card.Header>
                  <FontAwesomeIcon
                    className="card-icon text-dark"
                    icon={faSolarPanel}
                    size="2x"
                  />
                  <Card.Title>
                    <h4>Renewable Energy Integration</h4>
                  </Card.Title>
                </Card.Header>
                <Card.Body className="cardBody" id="card4">
                <Card.Img
                  src="src/assets/Utility_Scale_Solar.jpeg"
                  className="servImg mt-2 mb-1"
                  variant="top"
                  style={{ borderRadius: "10px", height: "30vh" }}
                />
                </Card.Body>
                <Card.Footer>
                  <Button
                    className="servBtn"
                    variant="outline-success"
                    onClick={() => hideNShow(3)}
                  >
                    Click To Learn More{" "}
                    <FontAwesomeIcon icon={faArrowCircleDown} />
                  </Button>
                  <Card.Text
                    className="text-start ms-2 me-2 servText"
                    style={{ display: showText[3] ? "block" : "none" }}
                  >
                    Integrate renewable energy sources into the existing
                    infrastructure. Enhance sustainability and contribute to
                    eco-friendly energy practices.
                  </Card.Text>

                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
