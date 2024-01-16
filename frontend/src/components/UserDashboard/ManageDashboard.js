import React, { useEffect } from 'react';
import { Card,Button } from 'react-bootstrap';
import axios from 'axios';
import './dashboard.css'

const ManageDashboard = () => {

    const currentUser=JSON.parse(localStorage.getItem("currentUser"))
    const user=currentUser.user;
    const userId=user._id

    useEffect(()=>{
       getTasksById(userId);
    },[])

    const getTasksById=(id)=>{
        axios.get(`http://localhost:8000/tasks/${id}`).then(res => {
       console.log("dashboard",res);
      });
    }


  return (
    <div>
      <div className='row card-section'>
        <div className='col-3 card-dashboard1'>
        <Card  className='card-text'>
     
         Total Tasks
        </Card>
        </div>
        <div className='col-3 card-dashboard2'>
        <Card  className='card-text'>
     
         Total Projects
        </Card>
        </div>
        <div className='col-3 card-dashboard3'>
        <Card  className='card-text'>
     
         Due Tasks
        </Card>
        </div>
       
      </div>
    </div>
  )
}

export default ManageDashboard
