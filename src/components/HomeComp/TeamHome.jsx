import React, { useEffect } from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import "../styles/home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

export default function TeamHome() {

    useEffect(() => {
        const teamcards = document.querySelectorAll('.teamcard');
    
        teamcards.forEach(teamcard => {
            teamcard.addEventListener('click', function() {
                const teamBody = this.querySelector('.teamBody');
                teamBody.style.right = teamBody.style.right === '0' ? '-100%' : '0';
            });
            
        });
    }, []);

  return (
    <>
        <section>
            <Container>
                <Row className='team-head mt-5 mb-3'>
                    <Col md={12} className='text-center text-dark' >
                        <mark className='teamHead'>Our Team <FontAwesomeIcon icon={faPeopleGroup} color='black'/></mark>
                        {/* <p><i>Our remarkable and hardworking team</i></p> */}
                    </Col>
                </Row>

                <Row>
                    <Col lg={3} md={6} className='col-12'>
                        <Card className='teamcard  text-center text-capitalize'>
                                <img src="src/assets/Sir Zain.jpg" className='teamImg' alt="" />
                            <div className="teamBody">
                                <h5>Sir Zain Ul Abideen</h5>
                                <p>Project Supervisor</p>
                                <Button className='teamBtn' variant='outline-success'>Learn More</Button>
                            </div>
                        </Card>
                    </Col>

                    <Col lg={3} md={6} className='col-12'>
                        <Card className='teamcard  text-center text-capitalize'>
                                <img src="src/assets/Me.JPG" className='teamImg' alt="" />
                            <div className="teamBody">
                                <h5>hammad ul hassan</h5>
                                <p>front end developer</p>
                                <Button className='teamBtn' variant='outline-success'>Learn More</Button>
                            </div>
                        </Card>
                    </Col>

                    <Col lg={3} md={6} className='col-12'>
                        <Card className='teamcard  text-center text-capitalize'>
                                <img src="src/assets/Taha(1).jpg" className='teamImg' alt="" />
                            <div className="teamBody">
                                <h5 >Taha Ali</h5>
                                <p>back end developer</p>
                                <Button className='teamBtn' variant='outline-success'>Learn More</Button>
                            </div>
                        </Card>
                    </Col>

                    <Col lg={3} md={6} className='col-12'>
                        <Card className='teamcard  text-center text-capitalize'>
                                <img src="src/assets/Fahad(1).jpg" className='teamImg' alt="" />
                            <div className="teamBody">
                                <h5>M fahad kayani</h5>
                                <p>Mobile App developer</p>
                                <Button className='teamBtn' variant='outline-success'>Learn More</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>

                

            </Container>

        </section>
    </>
  )
}
