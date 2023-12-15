import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, ListGroup, ListGroupItem, Modal, ModalFooter, Row } from 'react-bootstrap';
import LocationComponent from './LocationComponent';
import AuthUser from '../../AuthUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import "./dashboard.css"

function UserInfo() {
  const { http, user } = AuthUser();
  const [userData, setUserData] = useState(null);
  const [showModal, setShowModal] = useState(null);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    try {
      http.get(`/users/${user.user_id}`).then((res) => {
        // console.log(res.data.data);
        const data = res.data.data;

        const updatedData = {
          id: data?.id || 'N/A',
          name: data?.name || 'N/A',
          email: data?.email || 'N/A',
          latitude: data?.latitude || 0,
          longitude: data?.longitude || 0,
          solar_capacity: data?.solar_capacity || 0,
        };
        setUserData(updatedData);
      });
    } catch (error) {
      alert(error);
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUpdateForm = async (event) => {
    event.preventDefault();
    // Checks for solar capacity >0kW and <=5 kW
    const solarCapacity = parseFloat(userData.solar_capacity);
    if (isNaN(solarCapacity) || solarCapacity <= 0 || solarCapacity > 5) {
      alert('Solar capacity should be greater than 0 kW and less than or equal to 5 kWs.');
      return;
    }

    try {
      // Assuming you have an API endpoint for updating user details
      const response = await http.put(`/users/${user.user_id}`, userData); // Replace with your actual API endpoint

      if (response.status === 200) {
        alert('User details updated successfully!');
        handleCloseModal(); // Close the modal after successful update
      }
    } catch (error) {
      console.error('Error updating user details:', error);
      alert('Failed to update user details. Please try again.');
    }
  };


  return (
    <>
        <Container className='p-5 '>
        <Row className='justify-content-center'>
            <Col md={6}>
            <Card >
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
                    <ListGroupItem>Solar Capacity (in kWs) : {userData?.solar_capacity}</ListGroupItem>
                </ListGroup>
                </Card.Body>
                <Card.Footer>
                      <Button variant='outline-success' className='dashBtn p-2 m-1' onClick={handleShowModal} >Update Your Info  <FontAwesomeIcon icon={faPenToSquare} />  </Button>
                </Card.Footer>
            </Card>
            </Col>
        </Row>
        </Container>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Update User</Modal.Title>
            </Modal.Header>
              <Form onSubmit={handleUpdateForm}>
                <Modal.Body>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={userData?.name || ''}
                        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                      />
                  </Form.Group>
                  <Form.Group controlId="formName">
                    <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={userData?.email || ''}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      />
                  </Form.Group>
                  <Form.Group controlId="formName">
                    <Form.Label>Solar Capacity (kWs)</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter solar capacity "
                        value={userData?.solar_capacity || ''}
                        onChange={(e) => setUserData({ ...userData, solar_capacity: e.target.value })}
                      />
                  </Form.Group>

                  <LocationComponent/>

                </Modal.Body>

                  <ModalFooter>
                    <Button variant="outline-success btn-md" className='secondBtn' type="submit">
                      Save Changes <FontAwesomeIcon icon={faFloppyDisk} />
                    </Button>
                  </ModalFooter>
              </Form>
          </Modal>
    </>
  );
}

export default UserInfo;
