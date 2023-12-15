import React, { useEffect, useState } from 'react'
import AuthUser from '../../AuthUser'
import DataTable from 'react-data-table-component';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function ShowSchedule() {
    const{http,user}=AuthUser();
    const [showSchd,setShowSchd] = useState([]);
    const [userdata,setUserData] = useState();
    const [appls, setAppls] = useState([]);

    useEffect(()=>{
        ShowScheduling();
        getUserInfo();
        getAppliances();
    },[])

    const getAppliances = async (e) => {
    
      try {
        const response = await http.get(`/appliance/${user.user_id}`);
        console.log(response.data.data);
        setAppls(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    const getUserInfo=()=>{
      try {
        http.get(`/users/${user.user_id}`).then((res) => {
          console.log(res.data.data);
          setUserData(res.data.data);
        });
      } catch (error) {
        alert(error);
      }
    }


const ShowScheduling=()=>{
        try{
            http.get(`/schedulings/${user.user_id}`).then((res)=>{
                console.log(res.data.data);
                setShowSchd(res.data.data);
            }).catch((error) => {
              switch (error.response.status) {
                  case 401:
                      alert("Unauthorized access.");
                      break;
                  case 403:
                      alert("Forbidden.");
                      break;
                  case 404:
                      alert("Schedule not found.");
                      setShowSchd([]); // Set an empty array to indicate no data
                      break;
                  default:
                      alert("An unknown error occurred.");
              }
          });
        }catch(err){
            alert("Error in getting schedule:<br> "+ err)
        }
    }


 const generateSchedule = async () => {
      try {
        if (userdata?.longitude && userdata?.latitude && userdata?.solar_capacity) {
          // Proceed with generating schedule using the provided parameters
          const response = await http.get(`/showUserAppliancesX/${user.user_id}`);
          console.log('Schedule generated:', response.data);
          alert('Schedule generated:', response.data);
          // Further actions like displaying a success message, updating state, etc.
          showSchd();
        } else {
          alert('Insufficient user and/or appliance data to generate schedule.');
          // Handle the case where conditions are not met
        }
      } catch (error) {
        console.error('Error generating schedule:', error);
        // Handle errors or display alerts as needed
      }
    };
    


    const columns=[
        {
            name:"Date",
            selector: (row)=>row.date,
            sortable:true,
        },
        {
            name:"Start Time",
            selector: (row)=>row.start_time,
            sortable:true,
        },
        {
            name:"End time",
            selector: (row)=>row.end_time,
            sortable:true,
        },   
        {
          name: "Appliance Id",
          selector: (row) => row.appliance_id,
          sortable: true,
        },    
    ]

    const customStyles = {
      headCells: {
        style: {
          color: 'white', // Change font color in header cells
          fontWeight: 'bold',
          textTransform: 'uppercase',
          justifyContent: 'center', 
          // backgroundColor: '#7393b3', 
          // backgroundColor: '#708090', 
          backgroundColor: '#4aab3d',
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
    
    return (
    <>
        <h1 className='justify-content-center text-center m-3'> <span className='text-success'>Here are the schedules - </span> {user.name}</h1>
        <Container>
          <Row>
            <Col md={12}>
            {showSchd.length > 0 ? (
                            <DataTable
                                columns={columns}
                                data={showSchd}
                                fixedHeader
                                fixedHeaderScrollHeight="450px"
                                highlightOnHover
                                customStyles={customStyles}
                            />
                        ) : (
                            <div className="text-center mt-4">
                                <p className='text-warning'>No schedule data available - Add a schedule</p>
                                <Button variant="outline-primary" className='secondBtn' onClick={generateSchedule}>
                                    Add Schedule
                                </Button>
                            </div>
                        )}
            </Col>
          </Row>
        </Container>
        
    </>
  )
}

export default ShowSchedule