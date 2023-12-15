import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug } from '@fortawesome/free-solid-svg-icons';
import AuthUser from '../../AuthUser';
import { useNavigate } from 'react-router-dom';

const Appliances = () => {
  const [name, setName] = useState('');
  const [consumptionRate, setConsumptionRate] = useState('');
  const [watt, setWatt] = useState('');

  const{http,user}=AuthUser();
  
  const navigate=useNavigate();
  

  const errCheck= ()=>{
    // Validate appliance name
    if(name == null || name == ''){
      console.log("Enter the Appliance name");
      alert("Enter the Appliance name");
      return false;
    }
    // Validate consumption rate
    if(consumptionRate <1 || consumptionRate > 1440){
      console.log("Consumption rate should be between 1 and 1440 mins");
      alert("Consumption rate should be between 1 and 1440 mins");
      return false;
    }
    
    // Validates wattage of appliance
    if (watt < 1 || watt > 3500) {
      console.log('Watt should be between 1 and 3500.');
      alert("Watt should be between 1 and 3500");
      return false;
    }
    // Validate consumption rate is multiple of 15
    if (consumptionRate % 15 != 0 )
    {
      console.log('Consumption Rate should be a multiple of 15');
      alert('Consumption Rate should be a multiple of 15');
      return false;
    }
    return true;
  }

  
  const userId = user.user_id;
  const status='off';
  const IP = '192.168.12.12';
  const MAC = '111.111.111';
  
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(errCheck()){
      console.log(userId + ' ' + status + ' ' + IP + ' ' + MAC);
      try {
        const response = await http.post('/appliance', {
          a_name: name,
          a_consumption: consumptionRate,
          a_watt: watt,
          user_id:userId,
          a_status: status,
          a_IP: IP,
          a_MAC: MAC,
        });
        // userId,
        
        console.log(response.data);
        // Handle success, e.g., show success message or redirect
        alert("Appliance added successfully");
        navigate('/userhome')
      } catch (error) {
        // Handle error, e.g., show error message
        console.error('Error:', error);
      }
    }
    else{
      console.log("Process Unsuccessfull")
    }
  };

  return (
    <>
      <Container className='appFormHead'>
        <Row className='justify-content-center pt-5'>
          <Col md={8}>
            <Card className='appForm justify-content-center'>
              <Card.Header>
                <div className='justify-content-center text-center mt-4 mb-3'>
                  <h2 className='text-light text-center'>
                    Add an Appliance <FontAwesomeIcon icon={faPlug} />
                  </h2>
                </div>
              </Card.Header>
              <Form onSubmit={handleSubmit} className=''>
                <Card.Body>
                  <Form.Group controlId="formBasicName">
                    <Form.Label className='label'>Appliance Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Appliance Name"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicConsumptionRate">
                    <Form.Label className='label'>Appliance Consumption Rate in mins Per day</Form.Label>
                    <Form.Control
                      type="number"
                      value={consumptionRate}
                      onChange={(e) => setConsumptionRate(e.target.value)}
                      placeholder="Enter Appliance Consumption Rate in mins"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicWatt">
                    <Form.Label className='label'>Appliance Wattage</Form.Label>
                    <Form.Control
                      type="number"
                      value={watt}
                      onChange={(e) => setWatt(e.target.value)}
                      placeholder="Enter Appliance Watt"
                    />
                  </Form.Group>
                </Card.Body>
                <Card.Footer>
                  <Button className="dashBtn text-center m-3 p-3" variant='success' type="submit" size='md'>
                    Submit
                  </Button>
                </Card.Footer>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Appliances;
