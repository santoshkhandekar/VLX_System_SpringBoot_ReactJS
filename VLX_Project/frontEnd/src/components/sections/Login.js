import react, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import NewLogin from './NewLogin';

function Login() {
    
     return(
                <div>
                    <h1 style={{color:'red'}}>VLX-APP</h1>
                    <NewLogin/>
                    <Link to="/userReg"><b>New User Click_Here</b></Link>
                    <span style={{margin:70}}></span>
                    <Link to="/sellerReg"><b>New Seller Click_Here</b></Link>
                </div>
        );    
}

export default Login;