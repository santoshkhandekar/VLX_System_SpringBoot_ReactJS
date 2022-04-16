import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import mystore from './store';

function NewLogin() {

    let navigate = useNavigate();
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

   /*handleInput = (element)=> {      
        console.log(this.state.usrid);
        console.log(this.state.pwd);
    } */

    const submitForm=(ev)=>{
        ev.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers :{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }
        
        if(username === "Admin" && password === "admin")
       {
        navigate("/admin")
       }
      else
      {
        fetch("http://localhost:8080/checkLogin",reqOptions)
        .then(resp=> resp.json())
        .then(obj=> { console.log(obj);
            //setUser(obj);
            //console.log(user);
            localStorage.setItem("loggedinuser" , JSON.stringify(obj));
            //console.log(localStorage.getItem("loggedinuser").loginid.role);
            //console.log(user.fname);
            mystore.dispatch({type: 'LOGGEDIN'});
            //console.log(mystore.getState().loggedin);
            console.log(localStorage.getItem("loggedinuser"));
            let type = (JSON.parse(localStorage.getItem("loggedinuser"))).loginid.type;
            //alert(type);
            if(type === 'user')
            {
                //console.log(type);
            navigate("/Userhome");
            }
            else
            {
                //alert(type);
                navigate("/Sellerhome");
            }
        
    });
   }
}

    return (
        <div className="container">
                <form>
                <span style={{margin:100}}></span>
                 <h3>Login</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" placeholder="Enter Email ID for Username" onChange={(ev)=>setUsername(ev.target.value) } autoFocus="Username" required/>
                </div><br/>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={(ev)=>setPassword(ev.target.value) } required/>
                </div><br/>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block" onClick={(ev)=>submitForm(ev)}>Submit</button>
                </div>
                <br/><br/>
            </form>
            
            </div>
    );
}

export default NewLogin;