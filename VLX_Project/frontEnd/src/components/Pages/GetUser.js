import React from "react";
import { Link } from "react-router-dom";

export default class GetUser extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            user: []
        }
    }

    componentDidMount=()=>{
        fetch("http://localhost:8080/alluser")
        .then(resp => resp.json())
        .then(data => this.setState({user: data}))
    }

    render(){
        return (
            <div className="container">
                <h3> <i> User Details  </i> </h3>
                <center><table className="table  table-bordered " textAllign='centre' bg='dark' border='1'>
                    <tr>
                        <th> User ID  </th>
                        <th> User Name  </th>
                        <th> Address </th>
                        <th> Email </th>
                        <th> ContactNo </th>
                        
                        
                        
                    </tr>
                    {
                        this.state.user.map((p)=>{
                            return(
                                <tr>
                                   <td>{p.userid} </td> 
                                   <td>{p.username}</td>
                                   <td>{p.address}</td>
                                   <td>{p.email}</td>
                                   <td>{p.contactno}</td>
                                  

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