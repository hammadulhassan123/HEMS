import React, { Suspense, useEffect, useState,lazy } from 'react'
import { Container, Button, Modal, Form, Row, Col } from 'react-bootstrap'
import '../../App.css'
import AuthUser from '../../AuthUser'
import DataTable from 'react-data-table-component'
import LocationComponent from './LocationComponent'
import { useNavigate } from 'react-router-dom'
const DataTableLazy = lazy(() => import('react-data-table-component'));

function UserHome() {
  const { http, user } = AuthUser();
  const [appls, setAppls] = useState([]);
  const [selectedAppliance, setSelectedAppliance] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const getAppliances = async (e) => {
    
    // console.log(user);
    try {
      const response = await http.get(`/appliance/${user.user_id}`);
      // console.log(response.data.data);
      setAppls(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateClick = (appliance) => {
    setSelectedAppliance(appliance);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAppliance(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = errCheck(selectedAppliance);

    if (!isValid) {
      return; // Prevent updating if validation fails
    }
    // Update the appliance using API call
    try {
      await http.put(`/appliance/${selectedAppliance.id}`, selectedAppliance);
      handleCloseModal();
      alert("Your appliance has been updated successfully")
      getAppliances(); // Refresh the appliance data
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleDeleteClick = async (applianceId) => {
    const confirmDeletion = window.confirm('Are you sure you want to delete this appliance?');
    if (confirmDeletion) {
      try {
        await http.delete(`/appliance/${applianceId}`);
        // Update the state to remove the deleted appliance from the displayed data
        setAppls(appls.filter((appliance) => appliance.id !== applianceId));
        alert('Appliance deleted successfully');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const errCheck = (appliance) => {
    // Validate appliance name
    if (!appliance.a_name || appliance.a_name === '') {
      console.log("Enter the Appliance name");
      alert("Enter the Appliance name");
      return false;
    }
    
    // Validate consumption rate
    if (appliance.a_consumption < 1 || appliance.a_consumption > 1440) {
      console.log("Consumption rate should be between 1 and 1440 mins");
      alert("Consumption rate should be between 1 and 1440 mins");
      return false;
    }
    
    // Validates wattage of appliance
    if (appliance.a_watt < 1 || appliance.a_watt > 3500) {
      console.log('Watt should be between 1 and 3500.');
      alert("Watt should be between 1 and 3500");
      return false;
    }
  
    // Validate consumption rate is multiple of 15
    if (appliance.a_consumption % 15 !== 0) {
      console.log('Consumption Rate should be a multiple of 15');
      alert('Consumption Rate should be a multiple of 15');
      return false;
    }
  
    return true;
  };

  useEffect(() => {
    getAppliances();
  }, []);
  
  // Data Table css & columns
  const customStyles = {
    headCells: {
      style: {
        color: 'white', // Change font color in header cells
        fontWeight: 'bold',
        textTransform: 'uppercase',
        justifyContent: 'center', 
        // backgroundColor: '#7393b3', 
        // backgroundColor: '#708090', 
        // backgroundColor: '#4aab3d',
        backgroundColor: '#1b4332',
        border: '1px solid black', // Add border between header cells
      },
    },
    rows: {
      style: {
        // backgroundColor: '#92e6a7', 
        // backgroundColor: '#a8df8e', 
        // backgroundColor: '#C0C0C0', 
        backgroundColor: '#E5E4E2', 
        justifyContent: "center",
        
      },
    },
    table: {
      style: {
        borderCollapse: 'collapse', // Collapse borders between cells
        border: '1px solid black', // Add border around the table
        width: '100%', // Adjust table width to fill container
        boxShadow:'3px 3px 2px 3px slategrey'
      },
    },
    cells: {
      style: {
        border: '1px solid black', // Add border between cells
        padding: '8px', // Adjust cell padding
        justifyContent: 'center',
      },
    },
  };
    
  const columns =[
    {
      name: "Appliance Name",
      selector: (row) => row.a_name,
      sortable: true,
    },
    {
      name: "Appliance Consumption",
      selector: (row) => row.a_consumption,
      sortable: true,
    },
    {
      name: "Appliance Watt",
      selector: (row) => row.a_watt,
      sortable: true,
    },
    
    {
      name: 'Actions',
      cell: (row) => (
        <>
          <Button variant="outline-transparent btn-sm me-1" className='dashBtn' onClick={() => handleUpdateClick(row)}>
            Update
          </Button>
          <Button variant="danger btn-sm ms-1" className='secondBtn' onClick={() => handleDeleteClick(row.id)}>
            Delete
          </Button>
        </>
      ),
    }
    
  ]

  useEffect(()=>{
    getAppliances();
  },[])

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center mt-4 text-success">
        <h1>Welcome To Your Dashboard-<span className='text-dark'>{user.name}</span></h1>
      </div>
      <Container>
        <Row>
          <Col md={12}>
            <Suspense fallback={<div>Loading...</div>}>
            {appls.length > 0 ? (
                <DataTableLazy
                  title={
                    <h3 style={{ textAlign: 'center' }} className='dashHead'>
                      Appliance Data
                    </h3>
                  }
                  columns={columns}
                  data={appls}
                  pagination
                  fixedHeader
                  fixedHeaderScrollHeight="450px"
                  highlightOnHover
                  customStyles={customStyles}
                  responsive
                />
                ) : (
                  <div className="text-center mt-4">
                    <p className='text-center text-warning'>No appliance data available - Add an appliance first</p>
                    <Button variant="outline-primary btn-sm p-3" className='dashBtn' onClick={()=>navigate("/addAppliances")}>
                      Add an Appliance
                    </Button>
                  </div>
            )}
            </Suspense>
          </Col>
        </Row>
      </Container>
       {/* Modal for Update Form */}
       <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title ><span className='text-success'>Update</span><span className='text-dark'>Appliance</span></Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
        <Modal.Body className='justify-content-center m-3 p-3' >
          <Form.Group controlId="formApplianceName">
            <Form.Label>Appliance Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Appliance Name"
              value={selectedAppliance?.a_name || ''}
              onChange={(e) => setSelectedAppliance({ ...selectedAppliance, a_name: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formApplianceWatt">
            <Form.Label>Appliance Watt</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Appliance Watt"
              value={selectedAppliance?.a_watt || ''}
              onChange={(e) => setSelectedAppliance({ ...selectedAppliance, a_watt: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formApplianceConsumption">
            <Form.Label>Appliance Consumption</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Appliance Consumption"
              value={selectedAppliance?.a_consumption || ''}
              onChange={(e) => setSelectedAppliance({ ...selectedAppliance, a_consumption: e.target.value })}
            />
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" type="submit" className="m-1 dashBtn">
            Update
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>

    </>
  );
}

export default UserHome;