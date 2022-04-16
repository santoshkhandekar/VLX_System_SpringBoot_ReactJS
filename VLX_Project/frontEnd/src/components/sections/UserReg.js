import React from "react";
import {Link} from 'react-router-dom';


class UserReg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            address: "",
            email: "",
            contactno: "",
            user: {},
            
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
                username: this.state.username,
                password: this.state.password,
                address: this.state.address,
                email: this.state.email,
                contactno: this.state.contactno
            })
        }
        fetch("http://localhost:8080/registeru",reqOptions)
        .then(res=>res.json())
        .then(data => this.setState({user: data}))
        
    }
        
    render() {
        const pageTransition = {
            in: {
                opacity: 1,
                y: 0
            },
            out: {
                opacity: 0,
                y: "-100vh"

            }
        };
        return (
           
            
                <div className="col-sm-6 offset-sm-3" >
                    <form>
                                  <h2 style={{ marginTop: 10 }}>User Registration</h2>
                        
                                    Enter Username
                                    <input type="text" className="form-control"  onChange={this.handleChange} name="username"
                                         required autoFocus="Username" placeholder="Enter Email ID for Username"/><br/>
                                
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
                                
                                   
                                    <input type="submit" className="btn btn-primary btn-block" value="Register" onClick={this.submitData} />
                                
                    </form>
                    <p>{this.state.user.username} is Registered Successfully</p>
                    <Link to="/login"><b>If Registered  Click_Here to Login</b></Link>
                </div>
           
        );
    }
}
export default UserReg;