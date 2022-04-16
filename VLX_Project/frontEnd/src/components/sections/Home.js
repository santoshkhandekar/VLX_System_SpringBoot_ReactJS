import React, { Component } from 'react'
import Search from '../Pages/Search'
import Footer from './Footer.'
import { Link } from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
      <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
      <span style={{margin:70}}></span>
        <a class="navbar-brand" href="#"><h1 style={{color:"red"}}><b>VLX</b></h1></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <span style={{margin:90}}></span>
            <Link to="/" activeClassName="active"><b >Home</b></Link>
            </li>
            <li class="nav-item">
            <span style={{margin:90}}></span>
            <Link to="/login"><b>Login</b></Link>
            </li>
            
            <li class="nav-item">
            <span style={{margin:90}}></span>
            <Link to="/userReg"><b>SignUp</b></Link>
            </li>

            <li class="nav-item">
            <span style={{margin:90}}></span>
            <Link to="/help"><b>Help</b></Link>
            </li>
          </ul>
          
        </div>
       
      </div>
    </nav>
       
       <Search/>
    
       <Footer/>
       </div>
    )
  }
}
