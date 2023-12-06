import React from 'react'
import { Container,Table, Button } from 'react-bootstrap'
import '../../App.css'
import AuthUser from '../../AuthUser'

function UserHome() {
  const {user}=AuthUser();
  return (
    <>
    <div className='section-header justify-content-center text-center mt-4'>
      <h1 > 
        Welcome To Your Dashboard-{user.name}
      </h1>
    </div>
    <Container>
      <h1>Appliances data</h1>
      <Table className='appTable ' responsive striped bordered hover>
        <thead>
          <tr>
            <th>Appliance id</th>
            <th>Appliance name</th>
            <th>Appliance category</th>
            <th>Appliance consumption rate</th>
            <th>Appliance watt</th>
            <th>Creation Date</th>
            <th>Updation Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Refrigerator</td>
            <td>Home Appliance</td>
            <td>120V</td>
            <td>600W</td>
            <td>2022-04-01</td>
            <td>2022-04-02</td>
            <td >
              <Button variant="outline-primary" size="sm" style={{marginBottom:"5px"}}>Update</Button>{' '}
              <Button variant="outline-danger" size="sm">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Microwave</td>
            <td>Home Appliance</td>
            <td>120V</td>
            <td>1100W</td>
            <td>2022-04-03</td>
            <td>2022-04-04</td>
            <td>
              <Button variant="outline-primary" size="sm" style={{marginBottom:"5px"}}>Update</Button>{' '}
              <Button variant="outline-danger" size="sm" >Delete</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Toaster</td>
            <td>Home Appliance</td>
            <td>120V</td>
            <td>800W</td>
            <td>2022-04-05</td>
            <td>2022-04-06</td>
            <td>
              <Button variant="outline-primary" size="sm" style={{marginBottom:"5px"}}>Update</Button>{' '}
              <Button variant="outline-danger" size="sm" >Delete</Button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Dishwasher</td>
            <td>Home Appliance</td>
            <td>120V</td>
            <td>1400W</td>
            <td>2022-04-07</td>
            <td>2022-04-08</td>
            <td>
              <Button variant="outline-primary" size="sm" style={{marginBottom:"5px"}}>Update</Button>{' '}
              <Button variant="outline-danger" size="sm">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
    </>
  )
}

export default UserHome;