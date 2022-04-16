import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function EditProfile () {
  

  
    return (
      <div className='col-sm-6 offset-sm-3'> 
      <h1>Update Profile</h1>
  <div>
     
    Username :  <input type="text" placeholder='Username' className='form-control'   /><br/>         
    Password :  <input type="password"  placeholder='Password' className='form-control'  /><br/>
    Address :  <input type="text"  placeholder='address' className='form-control'   /><br/>
    Email :  <input type="email"  placeholder='email' className='form-control' /><br/>
    ContactNo :  <input type="number"  placeholder='contactno' className='form-control'  /><br/>
    <button  className='btn btn-primary'>Update</button><br/>
        <Link to="/">Go to Home</Link>
     </div>
   
</div> 
    )
  
}
export default EditProfile
