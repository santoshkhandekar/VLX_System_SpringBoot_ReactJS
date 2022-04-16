import React from 'react'

 function Gold() {
  return (
    <div>
         <h1>Gold Plan</h1>    
         <div>
             <ul>
                 <li>This Plan has Validity for 1 year</li>
                 <li>In this plan you can add more than 2 products upto unlimited products for sell</li>
                 <li>Price of this Plan is Rs.999 </li>
                 <li>You can pay by clicking below Pay botton</li>
                 <span style={{margin:20}}></span>
                 <li><a href='https://www.paypal.com/signin' className='btn btn-primary btn-block'><b>PAY</b></a></li>
             </ul>
         </div>
    </div>
  )
}
export default Gold
