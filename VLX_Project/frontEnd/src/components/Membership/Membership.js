import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Membership extends Component {
  render() {
    return (
      <div>
                  <h1>Membership Plans</h1>
            <ul>
            <span style={{margin:20}}></span>
                <li><Link to="/basic"><b>Basic Plan</b></Link> </li>
                <span style={{margin:20}}></span>
                <li><Link to="/silver"><b>Silver Plan</b></Link></li>
                <span style={{margin:20}}></span>
                <li><Link to="/gold"><b>Gold Plan</b></Link></li>
            </ul>
      </div>
    )
  }
}
