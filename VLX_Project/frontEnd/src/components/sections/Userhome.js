import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Pages/Search';
class Userhome extends React.Component {
    
    render(){
        var user = JSON.parse(localStorage.getItem('loggedinuser'));
    return (
        
        <div>
            <h1> Welcome {user.username}</h1>
            <nav>
                <div>
                <Link to="/editProfile"><b>Profile</b></Link> 
                    <span style={{margin:'10px'}}></span>
                    <span style={{margin:'10px'}}></span>
                    <span style={{margin:'10px'}}></span>
                    <span style={{margin:'10px'}}></span>
                    <Link to="/"><b>Logout</b></Link>
                    <Search/>
                   
                </div>
            </nav>
        </div>
       
    );
    }
}
export default Userhome