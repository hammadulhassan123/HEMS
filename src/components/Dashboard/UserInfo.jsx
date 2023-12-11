import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import LocationComponent from './LocationComponent';
import AuthUser from '../../AuthUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faWrench } from '@fortawesome/free-solid-svg-icons';

function UserInfo() {
  const { http, user } = AuthUser();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    try {
      http.get(`/users/${user.user_id}`).then((res) => {
        setUserData(res.data.data);
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
        <Container className='p-5 '>
        <Row className='justify-content-center'>
            <Col md={8}>
            <Card>
                <Card.Header className='signhead'>
                <div className=" justify-content-center text-center p-4">
                    <h3>Here are your details <FontAwesomeIcon icon={faInfoCircle} color='white' beatFade /></h3>
                </div>
                </Card.Header>
                <Card.Body>
                <ListGroup>
                    <ListGroupItem>ID: {userData?.id}</ListGroupItem>
                    <ListGroupItem>Name: {userData?.name}</ListGroupItem>
                    <ListGroupItem>Email: {userData?.email}</ListGroupItem>
                    <ListGroupItem>Latitude: {userData?.latitude}</ListGroupItem>
                    <ListGroupItem>Longitude: {userData?.longitude}</ListGroupItem>
                </ListGroup>
                </Card.Body>
                <Card.Footer>
                <b>Location Updation <FontAwesomeIcon icon={faWrench} fade /></b>
                <br />
                <LocationComponent />
                </Card.Footer>
            </Card>
            </Col>
        </Row>
        </Container>
    </>
  );
}

export default UserInfo;
