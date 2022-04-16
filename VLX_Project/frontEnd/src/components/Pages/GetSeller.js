import React from "react";
import { Link } from "react-router-dom";

export default class GetSeller extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            seller: []
        }
    }

    componentDidMount=()=>{
        fetch("http://localhost:8080/allseller")
        .then(resp => resp.json())
        .then(data => this.setState({seller: data}))
    }

    render(){
        return (
            <div className="container">
                <h3> <i> Seller Details  </i> </h3>
                <center><table className="table  table-bordered " textAllign='centre' bg='dark' border='1'>
                    <tr>
                        <th> Seller ID  </th>
                        <th> Seller Name  </th>
                        <th> Address </th>
                        <th> Email </th>
                        <th> ContactNo </th>
                        <th> Membership Status </th>
                        
                        
                    </tr>
                    {
                        this.state.seller.map((p)=>{
                            return(
                                <tr>
                                   <td>{p.sellerid} </td> 
                                   <td>{p.sellername}</td>
                                   <td>{p.address}</td>
                                   <td>{p.email}</td>
                                   <td>{p.contactno}</td>
                                   <td>{p.membership_status}</td>

                                    <a href="#"><b>Activate</b></a>
                                    <span style={{margin:20}}></span>
                                    <a href="#"><b>DeActivate</b></a>
                                    <span style={{margin:20}}></span>
                                    <a href="#"><b>Delete</b></a>
                                </tr>
                            )
                        })
                    }
                </table>
                </center>
            </div>
        )
    }
}