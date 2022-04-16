import React from 'react'

 function Basic() {
  return (
    <div>
         <h1>Basic Plan</h1>    
         <div>
             <ul>
                 <li>This Plan has Validity for 3 month</li>
                 <li>In this plan you can add more than 2 products upto 10 products for sell</li>
                 <li>Price of this Plan is Rs.199 </li>
                 <li>You can pay by clicking below Pay botton</li>
                 <span style={{margin:20}}></span>
                 <li><a href='https://www.paypal.com/signin' className='btn btn-primary btn-block'><b>PAY</b></a></li>
             </ul>
         </div>
    </div>
  )
}
export default Basic
