import React from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faWrench, faHome, faHourglass } from '@fortawesome/free-solid-svg-icons';
import "../styles/home.css"

function CHome() {
  return (
    <>
           <section id="services" className="services section-padding">
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-header text-center pb-5">
              <h2>Our Services</h2>
              <p>Lorem ipsum, dolor sit amet consectetur<br />adipisicing elit. Iusto quam atque quasi!</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={3} md={12} className="col-12">
            <Card className="text-center pb-2" id="serv-card">
              <Card.Img variant='top' src='src/assets/1.png' />
              <Card.Body>
                <FontAwesomeIcon icon={faMinus} size='2x'/>
                <Card.Title>Best Quality</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ab obcaecati non quidem, nihil corporis harum sit sequi error cum, neque quibusdam quis libero iure.
                </Card.Text>
                <Button variant="outline-dark border-warning">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={12} className="col-12">
            <Card className="text-center pb-2" id="serv-card">
              <Card.Body>
                <FontAwesomeIcon icon={faHome} size='2x'/>
                <Card.Title>Best Quality</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ab obcaecati non quidem, nihil corporis harum sit sequi error cum, neque quibusdam quis libero iure.
                </Card.Text>
                <Button variant="outline-dark border-warning">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={12} className="col-12">
            <Card className="text-center pb-2" id="serv-card">
              <Card.Body>
                <FontAwesomeIcon icon={faHourglass} size='2x'/>
                <Card.Title>Best Quality</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ab obcaecati non quidem, nihil corporis harum sit sequi error cum, neque quibusdam quis libero iure.
                </Card.Text>
                <Button variant="outline-dark border-warning">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={12} className="col-12">
            <Card className="text-center pb-2" id="serv-card">
              <Card.Body>
                <FontAwesomeIcon icon={faWrench} size='2x'/>
                <Card.Title>Best Quality</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ab obcaecati non quidem, nihil corporis harum sit sequi error cum, neque quibusdam quis libero iure.
                </Card.Text>
                <Button variant="outline-dark border-warning">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default CHome