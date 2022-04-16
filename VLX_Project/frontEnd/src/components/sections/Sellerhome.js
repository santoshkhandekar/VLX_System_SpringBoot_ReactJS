import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Pages/Search';
class Sellerhome extends React.Component {
    constructor(props)
    {
        super(props);
    }


    render(){
        var seller = JSON.parse(localStorage.getItem('loggedinuser'));
    return (
        
        <div>
            <h1> Welcome {seller.sellername}</h1>
            <nav>
                <div>
                   <Link to="/addProducts"><b>Add Product</b></Link> 
                   <span style={{margin:10}}></span>
                   
                    <Link to="/editProfile"><b>Profile</b></Link> 
                    <span style={{margin:'10px'}}></span>
                   
                    <Link to="/membership"><b>Membership Payment</b></Link>
                    <span style={{margin:10}}></span>
                    <span style={{margin:'10px'}}></span>
                    <Link to="/"><b>Logout</b></Link>
                    <Search/>

                </div>
            </nav>
        </div>
       
    );
    }
}
export default Sellerhome