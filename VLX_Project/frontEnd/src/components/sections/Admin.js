import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../Pages/Search';
 function Admin() {
  return (
    <div>
                    <span style={{margin:10}}></span>
                     <h1>Welcome Admin </h1>
        
                <div>
                <Link to="/getuser"><b> User's Info </b></Link> 
                    <span style={{margin:70}}></span>
                   <Link to="/getseller"><b> Seller's Info </b></Link> 
                   <span style={{margin:70}}></span>
                   <Link to="/delete"><b>Delete Products</b></Link> 
                    <span style={{margin:70}}></span>
                    
                    <Link to="/"> <b>Logout</b></Link>
                </div>
                <Search/>
          
    </div>

  )
}
export default Admin
