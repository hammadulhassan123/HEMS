import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar, faHome, faPlug, faPeopleGroup, faBalanceScale, faDatabase, faHandHoldingDollar,} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./styles/home.css"
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

export default function ServHome() {
  return (
    <>
      <section className="services section-padding">
        <Container>
          <Row>
            <Col md={12} className="">
              <div className="section-header text-center pb-5 mt-5">
              <mark className='teamHead'>Our Services <FontAwesomeIcon icon={faDatabase} color='black'/></mark>             
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={3} md={12} className="col-12">
              <Card className="text-center pb-2 servhome sh1" >
                <Card.Body>
                  <FontAwesomeIcon className="card-icon"  icon={faCalendar} size="2x" />
                  <Card.Title> <h4>Smart Scheduling</h4></Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis ab obcaecati non quidem, nihil corporis harum sit
                    sequi error cum, neque quibusdam quis libero iure.
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={12} className="col-12">
              <Card className="text-center pb-2 servhome sh2" >
                <Card.Body>
                  <FontAwesomeIcon className="card-icon" icon={faBalanceScale} size="2x" />
                  <Card.Title>Load Balancing</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis ab obcaecati non quidem, nihil corporis harum sit
                    sequi error cum, neque quibusdam quis libero iure.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={12} className="col-12">
              <Card className="text-center pb-2 servhome sh3" >
                <Card.Body>
                <FontAwesomeIcon className="card-icon" icon={faHandHoldingDollar} size="2x"/>
                  <Card.Title>Cost Saving</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis ab obcaecati non quidem, nihil corporis harum sit
                    sequi error cum, neque quibusdam quis libero iure.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={12} className="col-12">
              <Card className="text-center pb-2 servhome sh4" >
                <Card.Body>
                <FontAwesomeIcon className="card-icon" icon={faPlug} size="2x"  />
                  <Card.Title>Off Grid</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis ab obcaecati non quidem, nihil corporis harum sit
                    sequi error cum, neque quibusdam quis libero iure.
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
