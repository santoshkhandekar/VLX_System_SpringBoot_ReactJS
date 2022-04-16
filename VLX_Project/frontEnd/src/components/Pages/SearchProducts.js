import React from "react";
import { Link } from "react-router-dom";

export default class SearchProducts extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount=()=>{
        fetch("http://localhost:8080/allProduct")
        .then(resp => resp.json())
        .then(data => this.setState({products: data}))
    }

    render(){
        return (
            <div className="container">
                <h3> <i> Products Information  </i> </h3>
                <center><table className="table  table-bordered " textAllign='centre' bg='dark' border='1'>
                    <tr>
                        <th> Product ID  </th>
                        <th> Product Name  </th>
                        <th> Price </th>
                        <th> image </th>
                        
                        
                    </tr>
                    {
                        this.state.products.map((p)=>{
                            return(
                                <tr>
                                   <td>
                                       {p.productid}
                                   </td> 
                                   <td>{p.productname}</td>
                                   <td>{p.price}</td>
                                   <td>{p.image}</td>
                                    <a href="/delete">Delete</a>

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