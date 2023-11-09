import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row,Col,Container,Button,Carousel,Image } from 'react-bootstrap'
import "./about.css"

export default function Teamcard() {
  return (
    <>
      <section className="section-padding m-3">
        <Container className="team p-2 mt-4"  >
          <Row>
                <Col Col md={2} className="teamMain mt-2 mb-2">
                  <div className="teamImg">
                    <Image src="src/assets/Sir Zain.jpg"  alt="SUPERVISOR" fluid />
                  </div>
                </Col>
                <Col md={4} className=" ps-5 mt-md-5">
                  <div className="teamText">
                    <table>
                      <thead> <h4><b>Sir Zain</b></h4> </thead>
                      <tr>Full Stack Developer</tr>
                      <tr>Lecturer at Numl</tr>
                      <tr>Interested in AI and ML</tr>
                    </table>
                  </div>
                </Col>
                <Col md={2} className="teamMain mt-2 mb-2">
                  <div className="teamImg">
                    <Image src="src/assets/Me.JPG"  alt="SUPERVISOR" fluid />
                  </div>
                </Col>
                <Col md={4} className=" ps-5 mt-md-5">
                  <div className="teamText">
                    <table>
                      <thead> <h4><b>Sir Zain</b></h4> </thead>
                      <tr>Full Stack Developer</tr>
                      <tr>Lecturer at Numl</tr>
                      <tr>Interested in AI and ML</tr>
                    </table>
                  </div>
                </Col>
          </Row>
        </Container>

        <Container className='team p-2 mt-4'>
           <Row>
                <Col md={2} className="teamMain mt-2 mb-2">
                  <div className="teamImg">
                    <Image src="src/assets/Taha(1).jpg"  alt="SUPERVISOR" fluid />
                  </div>
                </Col>
                <Col md={4} className=" ps-5 mt-md-5">
                  <div className="teamText">
                    <table>
                      <thead> <h4><b>Sir Zain</b></h4> </thead>
                      <tr>Full Stack Developer</tr>
                      <tr>Lecturer at Numl</tr>
                      <tr>Interested in AI and ML</tr>
                    </table>
                  </div>
                </Col>
                <Col md={2} className="teamMain mt-2 mb-2">
                  <div className="teamImg">
                    <Image src="src/assets/Fahad(1).jpg"  alt="SUPERVISOR" fluid />
                  </div>
                </Col>
                <Col md={4} className=" ps-5 mt-md-5">
                  <div className="teamText">
                    <table>
                      <thead> <h4><b>Sir Zain</b></h4> </thead>
                      <tr>Full Stack Developer</tr>
                      <tr>Lecturer at Numl</tr>
                      <tr>Interested in AI and ML</tr>
                    </table>
                  </div>
                </Col>
          </Row>
        </Container>


      </section>
    </>
  )
}
