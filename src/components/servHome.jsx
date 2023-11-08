import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faHourglass,faSackDollar, faHome,faWrench, faPlugCircleBolt,} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./styles/home.css"

export default function ServHome() {
  return (
    <>
      <section className="services section-padding">
        <Container>
          <Row>
            <Col md={12} className="">
              <div className="section-header text-center pb-5 mt-5">
                <h2>Services</h2>
                <p>
                  Our Project will provide following services: 
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={3} md={12} className="col-12">
              <Card className="text-center pb-2 servhome" >
                <Card.Body>
                  <FontAwesomeIcon className="card-icon" icon={faMinus} size="2x" />
                  <Card.Title> <h4>Smart Scheduling</h4></Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis ab obcaecati non quidem, nihil corporis harum sit
                    sequi error cum, neque quibusdam quis libero iure.
                  </Card.Text>
                  <Button className="servBtn" variant="outline-success">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={12} className="col-12">
              <Card className="text-center pb-2 servhome" >
                <Card.Body>
                  <FontAwesomeIcon className="card-icon" icon={faHome} size="2x" />
                  <Card.Title>Best Quality</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis ab obcaecati non quidem, nihil corporis harum sit
                    sequi error cum, neque quibusdam quis libero iure.
                  </Card.Text>
                  <Button className="servBtn" variant="outline-success">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={12} className="col-12">
              <Card className="text-center pb-2 servhome" >
                <Card.Body>
                <FontAwesomeIcon className="card-icon" icon={faSackDollar} size="2x"/>
                  <Card.Title>Cost Saving</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis ab obcaecati non quidem, nihil corporis harum sit
                    sequi error cum, neque quibusdam quis libero iure.
                  </Card.Text>
                  <Button className="servBtn" variant="outline-success">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={12} className="col-12">
              <Card className="text-center pb-2 servhome" >
                <Card.Body>
                <FontAwesomeIcon className="card-icon" icon={faPlugCircleBolt} size="2x"  />
                  <Card.Title>Best Quality</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis ab obcaecati non quidem, nihil corporis harum sit
                    sequi error cum, neque quibusdam quis libero iure.
                  </Card.Text>
                  <Button className="servBtn" variant="outline-success">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
