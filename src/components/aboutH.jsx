import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const AboutSection = () => {
  return (
    <section className="about section-padding m-2">
      <Container className="p-2" style={{ boxShadow: "2px 2px 8px 2px rgba(0, 0, 0, 0.3)" }} >
        <Row>
          <Col lg={3} md={12} className="col-12">
            <div className="about-img">
              <Image src="src/assets/Solar on House new.jpg"  alt="A Tall City Building" fluid />
            </div>
          </Col>
          <Col lg={9} md={12} className="col-12 ps-lg-5 mt-md-5">
            <div className="about-text">
              <h2 className="about-head text-light p-3 text-center">
                We are Providing Innovative Solution
              </h2>
              <p className="mt-5">
                Energy management is an important problem being faced in many
                households today. Energy is being utilized at peak times, which
                costs more than it should. Also, nowadays renewable energy
                sources such as Solar Panels are becoming an important factor in
                reducing the cost of electricity bills. But the energy overall
                is still mismanaged and not being utilized efficiently. This
                report proposes a solution that will efficiently manage
                household energy by using heuristic algorithms to predict energy
                wastage and also managing solar energy with electricity to
                reduce the electricity bill in the best way possible. Also, this
                is done considering the comfort of the user. The system will
                monitor the energy being used by appliances in the house and the
                times at which the energy is being utilized more. Solar panels
                play a key role in making the system efficient. The user will
                have full control over how energy is being utilized in the
                household.
              </p>
              {/* <Button variant="success" className="abtBtn ps-5 pe-5 pt-2 pb-2">
                Learn More
              </Button> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
