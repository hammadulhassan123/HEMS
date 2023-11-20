import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row,Col,Container,Button,Carousel,Card,Image, CarouselItem,} from 'react-bootstrap'
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import "../styles/home.css"
import "./about.css"
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

export default function Teamcard() {
 
  const teamMembers = [
    {
      name: 'Hammad Ul Hassan',
      image: 'src/assets/Me.JPG',
      points: ['Front-End Developer (React.JS)','Final Year Student', 'Interested in Front-End technologies'],
    },
    {
      name: 'Syed Taha Ali',
      image: 'src/assets/Taha(1).jpg',
      points: ['Back-End Developer (Laravel)','Final Year Student', 'Interested in Back-End technologies'],
    },
    {
      name: 'Sir Zain Ul Abideen',
      image: 'src/assets/Sir Zain.jpg',
      points: ['Project Supervisor','Lecturer-Web Technologies Expert', 'Interested in AI & ML technologies'],
    },
    {
      name: 'Muhammad Fahad Kayani',
      image: 'src/assets/Fahad(1).jpg',
      points: ['Mobile App Developer (Flutter)','Final Year Student', 'Interested in Mobile Development technologies'],
    },
  ];

  return (
    
    <>
      <Container>
          <Row className='team-head mt-5 mb-2'>
                 <Col md={12} className='text-center text-dark' >
                        <mark className='teamHead'>Our Team <FontAwesomeIcon icon={faPeopleGroup} color='black' fade/></mark>
                </Col>
            </Row>
            <Row>
              { teamMembers.map((member)=>(
                <Col key={member.name} md={12} lg={6} className='mt-2'>
                    <Card className='cardTeam text-center' >
                       <Card.Body>
                          <Image src={member.image} alt={member.name} className='text-center cardTImg'/>
                          <Card.Title> <h3><u>{member.name}</u></h3></Card.Title>
                          <Card.Text className='cardTText'> 
                              <ul className='points text-lg-start'>
                                {member.points.map((point)=>(
                                  <b>
                                    <li>{point}</li>
                                  </b>
                                ))}
                              </ul>
                          </Card.Text>
                          <hr className='text-secondary text-lg-center'/>
                          <p className="socials ">
                            <a href="#">
                            <FontAwesomeIcon icon={faFacebook} className="mx-1" size='2x'/>
                            </a>
                            <a href="#">
                            <FontAwesomeIcon icon={faXTwitter} className="mx-1" size='2x' />
                            </a>
                            <a href="#">
                            <FontAwesomeIcon icon={faLinkedin} className="mx-1" size='2x'/>
                            </a>
                            <a href="#">
                            <FontAwesomeIcon icon={faInstagram} className="mx-1" size='2x'/>
                            </a>
                          </p>
                       </Card.Body>
                    </Card>
                </Col>
              ))}
            </Row>
       </Container>
    </>
  )
}
