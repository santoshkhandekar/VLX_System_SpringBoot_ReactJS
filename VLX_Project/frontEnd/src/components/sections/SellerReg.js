import React from "react";
import {Link} from 'react-router-dom';


class SellerReg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sellername: "",
           username: "",
           password: "",
           address: "",
           email: "",
           contactno: "",
           membership_status: "",
           seller: {}
            
        }
    }
    handleChange = (e) => {
        var nm = e.target.name;
        var val = e.target.value;
        this.setState({ [nm]: val })
    }

    submitData=(e)=>{
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                sellername: this.state.sellername,
               username: this.state.username,
               password: this.state.password,
               address: this.state.address,
               email: this.state.email,
               contactno: this.state.contactno,
               membership_status: this.state.membership_status
            })
        }
        fetch("http://localhost:8080/registers",reqOptions)
        .then(res=>res.json())
        .then(data => this.setState({user: data}))
    }
        
    render() {
       
        return (
           
            
                <div className="col-sm-6 offset-sm-3">

                    <form>
                                  <h2 >Seller Registration</h2>
                                    Enter Sellername
                                    <input type="text" className="form-control"  onChange={this.handleChange} name="sellername"
                                         required autoFocus="Username" placeholder="Enter Email ID for Username"/><br/>
                                
                                    Enter Username
                                    <input type="text" className="form-control"  onChange={this.handleChange} name="username"
                                         required placeholder="Enter Email ID for Username"/><br/>
                                
                                    Enter Password 
                                    <input type="password" className="form-control"  onChange={this.handleChange} name="password" placeholder="5-12 characters"
                                    /><br/>
                               
                                    Enter Address 
                                    <input type="text" className="form-control"  onChange={this.handleChange} name="address" placeholder=""/><br/>
                                    
                               
                                    Enter email 
                                    <input type="email" className="form-control"  onChange={this.handleChange} name="email"
                                        placeholder="abc@gmail.com" required /><br/>
                                
                                    Enter ContactNo
                                    <input type="phone" className="form-control" onChange={this.handleChange} name="contactno" required placeholder="+91"
                                    /><br/>
                               
                                    Membership_Status 
                                    <input type="text" className="form-control"  onChange={this.handleChange} name="membership_status" placeholder="Active/NotActive"/><br/>
                                
                                
                                    <input type="submit" className="btn btn-primary btn-block" value="Register" onClick={this.submitData} />
                                
                    </form>
                    <p>{this.state.seller.username} is Registered Successfully</p>
                    <Link to="/login"><b>If Registered  Click_Here to Login</b></Link>
                </div>
            
        );
    }
}
export default SellerReg;