import React from "react";
import axios from 'axios';

export default class Delete extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products: [],
            id: "",
        }
    }

    componentDidMount=()=>{
        fetch("http://localhost:8080/allProduct")
        .then(resp => resp.json())
        .then(data => this.setState({products: data}))
    }

    deleteProduct = (id) => {
        axios.delete("http://localhost:8080/product/" + id).then(
            (response) => {
                alert("Record Deleted Successfully");
                this.setState({
                    products: this.state.products.filter(product => product.id !== id)
                });
            }, (error) => {
                alert("Operation Failed Here");
            }
        );
    };

    render(){
        const { products } = this.state;

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
                                   <td><button className="btn btn-outline-danger" onClick={() => { this.deleteProduct(products.id) }}>Delete</button></td>

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