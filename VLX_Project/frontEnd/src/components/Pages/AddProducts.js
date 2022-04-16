import React, { Component } from 'react'
import mystore from '../sections/store';
export default class AddProducts extends Component {
     constructor(props)
     {
        super(props);
        this.state = {
          productname: "",
          price: "",
          image: "",
          categoryname: ""
        } 
     }

     componentDidMount=()=>{
      fetch("http://localhost:8080/saveproduct")
      .then(resp => resp.json())
      .then(data => {console.log(data);

         localStorage.setItem("loggedinuser" , JSON.stringify(data));
         mystore.dispatch({type: 'LOGGEDIN'});

      })

     }

     handleInput=()=>{
       
     }


  render() {
    return (
      <div>
         <h1>Add Product</h1>
                  <span style={{margin:50}}></span>
                <div className='container'>  
                      <input type="text" name='productname' placeholder='Product Name ' class="form-control" autoFocus="productname"
                      onChange={this.handleInput}/>
                </div>
                <span style={{margin:50}}></span>
                <div className='container'>  
                 <input type="number" name='price' placeholder='Product Price ' class="form-control"  onChange={this.handleInput}/>
                </div>
               
                <span style={{margin:50}}></span>
                <div className='container'>  
                               <label>Select Category</label>
                               <select className='form-control'>
                                  <option>Select Category</option>
                                  <option id="Mobiles">Mobiles</option>
                                  <option id="SUV">SUV</option>
                                  <option id="Car">Car</option>
                                  <option id="TV">TV</option>
                                  <option id="Motorcycle">Motorcycle</option>
                               </select>
                </div> 
                 <span style={{margin:50}}></span>
                <div className='container'>  
                   <input type="file" name='price' placeholder='Product Image ' class="form-control"  onChange={this.handleInput}/>
                </div>         
                <span style={{margin:50}}></span>
                <div className='container'>  
                   <input type="submit" className="btn btn-primary btn-block" value="ADD" onClick={this.submitData}/>
                </div>  
        </div>
    )
  }
}
