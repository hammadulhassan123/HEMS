import React, { useEffect, useState } from 'react'
import AuthUser from '../../AuthUser'
import DataTable from 'react-data-table-component';

function ShowSchedule() {
    const{http,user}=AuthUser();
    const [showSchd,setShowSchd] = useState();

    useEffect(()=>{
        ShowScheduling();
    },[])

    const ShowScheduling=()=>{
        try{
            http.get("/schedulings").then((res)=>{
                // console.log(res.data.data);
                setShowSchd(res.data.data);
            })
        }catch(err){
            console.log(err);
            alert("Error in getting schedule:<br> "+ err)
        }
    }

    const columns=[
        {
            name:"Id",
            selector: (row)=>row.id,
            sortable:true,
        },
        {
            name:"Created At",
            selector: (row)=>row.created_at,
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
            name:"Updated At",
            selector: (row)=>row.updated_at,
            sortable:true,
        },
        {
            name:"User ID",
            selector: (row)=>row.user_id,
            sortable:true,
        },
    ]

    const customStyles = {
        headCells: {
          style: {
            color: 'black', // Change font color in header cells
            fontWeight: 'bold',
            textTransform:'uppercase',
            backgroundColor: '#4aab3d', 
          },
        },
        rows: {
          style: {
            // backgroundColor: '#89facd', // Change background color of rows
            backgroundColor: '#fedfed', // Change background color of rows
    
          },
        },

        table: {
          style: {
            border: '3px solid black', // Add border to the entire table
          },
        },
      };

    return (
    <>
        <h1 className='justify-content-center text-center m-3'>Here are the Schedulings-{user.name}</h1>
        <DataTable
            // title="Schedulings"
            columns={columns}
            data={showSchd}
            fixedHeader
            fixedHeaderScrollHeight="450px"
            //selectableRows
            // selectableRowsHighlight
            highlightOnHover
            customStyles={customStyles}
        />
    </>
  )
}

export default ShowSchedule