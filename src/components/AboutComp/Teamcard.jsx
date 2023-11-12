import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row,Col,Container,Button,Carousel,Card,Image, CarouselItem,} from 'react-bootstrap'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import "../styles/home.css"
import "./about.css"

export default function Teamcard() {
 
  return (
    <>
      <Container>
          <Row className='team-head mt-5 mb-2'>
                 <Col md={12} className='text-center text-dark' >
                        <mark className='teamHead'>Our Team <FontAwesomeIcon icon={faPeopleGroup} color='black' fade/></mark>
                </Col>
            </Row>
       </Container>
    </>
  )
}
