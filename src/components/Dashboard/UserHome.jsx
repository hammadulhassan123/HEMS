import React, { useEffect, useState } from 'react'
import { Container,Table, Button } from 'react-bootstrap'
import '../../App.css'
import AuthUser from '../../AuthUser'
import DataTable from 'react-data-table-component'
import LocationComponent from './LocationComponent'

function UserHome() {
  const {http,user}=AuthUser();

  const [appls,setAppls]= useState([]);

  const getAppliances = async () => {
    try {
      const response = await http.get(`/appliances/${user.user_id}`);
      console.log(user.user_id);
      setAppls(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const columns =[
    {
      name: "Appliance Id",
      selector: (row) => row.id,
      sortable: true,
    },
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
      name: "Device",
      selector: (row) => row.device,
    },
    {
      name: "User-Id",
      selector: (row) => row.user_id,
    },
  ]

  useEffect(()=>{
    getAppliances();
  },[])

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center mt-4 text-success">
        <h1>Welcome To Your Dashboard-<span className='text-dark'>{user.name}</span></h1>
      </div>
      <DataTable
        title="Appliance Data"
        columns={columns }
        data={appls}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        // actions= {<button className='btn btn-outline-danger btn-sm' >Delete</button>}
      />

      <LocationComponent/>
    </>
  );
}

export default UserHome;