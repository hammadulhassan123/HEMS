import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar, faHome, faPlug, faPeopleGroup, faBalanceScale, faDatabase, faHandHoldingDollar, faArrowCircleDown,} from "@fortawesome/free-solid-svg-icons";
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
              <mark className='teamHead'>Our Services <FontAwesomeIcon icon={faDatabase} color='black'/></mark>             
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={3} md={12} className="col-12 ">
              <Card className="text-center pb-2 servhome sh1" >
                <Card.Body className="servBody" id="card1">
                  <FontAwesomeIcon className="card-icon text-dark"  icon={faCalendar} size="2x" />
                  <Card.Title> <h4>Smart Scheduling</h4></Card.Title>
                  <Card.Img src="src/assets/1.png" className="servImg mt-2 mb-1" variant="top" style={{borderRadius:"10px", height:"30vh"}} />
                    <Button className="servBtn" variant="outline-success" onClick={() => hideNShow(0)}>Click To Learn More <FontAwesomeIcon icon={faArrowCircleDown} /></Button>
                    <Card.Text className="text-start ms-2 me-2 servText" style={{ display: showText[0] ? 'block' : 'none' }}>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Officiis ab obcaecati non quidem, nihil corporis harum sit
                      sequi error cum, neque quibusdam quis libero iure.
                    </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={12} className="col-12">
              <Card className="text-center pb-2 servhome sh2" >
                <Card.Body className="cardBody" id="card2">
                  <FontAwesomeIcon className="card-icon" icon={faBalanceScale} size="2x" />
                  <Card.Title>Load Balancing</Card.Title>
                  <Card.Img src="src/assets/2.png" className="servImg mt-2 mb-1" variant="bottom" style={{borderRadius:"10px",height:"30vh"}} />
                  <Button className="servBtn" variant="outline-success" onClick={() => hideNShow(1)}>Click To Learn More <FontAwesomeIcon icon={faArrowCircleDown} /></Button>
                    <Card.Text className="text-start ms-2 me-2 servText" style={{ display: showText[1] ? 'block' : 'none' }}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Officiis ab obcaecati non quidem, nihil corporis harum sit
                      sequi error cum, neque quibusdam quis libero iure.
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={12} className="col-12">
              <Card className="text-center pb-2 servhome sh3" >
                <Card.Body className="servBody" id="card3">
                  <FontAwesomeIcon className="card-icon" icon={faHandHoldingDollar} size="2x"/>
                  <Card.Title>Cost Saving</Card.Title>
                  <Card.Img src="src/assets/3.png" className="servImg mt-2 mb-1" variant="top" style={{borderRadius:"10px",height:"30vh"}} />
                  <Button className="servBtn" variant="outline-success" onClick={() => hideNShow(2)}>Click To Learn More <FontAwesomeIcon icon={faArrowCircleDown} /></Button>
                    <Card.Text className="text-start ms-2 me-2 servText" style={{ display: showText[2] ? 'block' : 'none' }}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Officiis ab obcaecati non quidem, nihil corporis harum sit
                      sequi error cum, neque quibusdam quis libero iure.
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={12} className="col-12">
              <Card className="text-center pb-2 servhome sh4" >
                <Card.Body className="cardBody" id="card4">
                  <FontAwesomeIcon className="card-icon" icon={faPlug} size="2x"  />
                  <Card.Title>Off Grid</Card.Title>
                  <Card.Img src="src/assets/Utility_Scale_Solar.jpeg" className="servImg mt-2 mb-1" variant="top" style={{borderRadius:"10px",height:"30vh"}} />
                  <Button className="servBtn" variant="outline-success" onClick={() => hideNShow(3)}>Click To Learn More <FontAwesomeIcon icon={faArrowCircleDown} /></Button>
                    <Card.Text className="text-start ms-2 me-2 servText" style={{ display: showText[3] ? 'block' : 'none' }}>
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
