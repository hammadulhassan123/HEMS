import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons';

const Appliances = () => {
  const [appliance, setAppliance] = useState({
    id: '',
    name: '',
    category: '',
    consumptionRate: '',
    watt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppliance((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(appliance);
    // add code here to submit the form data
  };

  return (
    <>
    <Container className='appFormHead m-5 p-5'>
      <div className='section-header justify-content-center text-center mt-4 mb-3'>
        <b className='teamHead text-center'> Appliances <FontAwesomeIcon icon={faLaptopHouse}/> </b>
      </div>
        <Row className='appForm m-5 p-5'>
          <Col md={12}>
            <Form onSubmit={handleSubmit} className=''>
            <Form.Group controlId="formBasicId">
              <Form.Label className='label'>Appliance Id</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={appliance.id}
                onChange={handleChange}
                placeholder="Enter Appliance Id"
              />
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label className='label'>Appliance Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={appliance.name}
                onChange={handleChange}
                placeholder="Enter Appliance Name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicCategory">
              <Form.Label className='label'>Appliance Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={appliance.category}
                onChange={handleChange}
                placeholder="Enter Appliance Category"
              />
            </Form.Group>
            <Form.Group controlId="formBasicConsumptionRate">
              <Form.Label className='label'>Appliance Consumption Rate</Form.Label>
              <Form.Control
                type="text"
                name="consumptionRate"
                value={appliance.consumptionRate}
                onChange={handleChange}
                placeholder="Enter Appliance Consumption Rate"
              />
            </Form.Group>

            <Form.Group controlId="formBasicWatt">
              <Form.Label className='label'>Appliance Watt</Form.Label>
              <Form.Control
                type="text"
                name="watt"
                value={appliance.watt}
                onChange={handleChange}
                placeholder="Enter Appliance Watt"
              />
            </Form.Group>
            <Button className="dashBtn text-center m-2" variant='success' type="submit" size='sm' style={{width:"20vw"}}>
              Submit
            </Button>
            </Form>
          </Col>
        </Row>

    </Container>

    
    </>
  );
};

export default Appliances;
