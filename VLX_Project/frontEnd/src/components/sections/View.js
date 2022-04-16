import Data from '../Pages/Data.js'
import { useState } from 'react'
import Search from '../Pages/Search.js';

function View(){

    const Search = () => {
        const [filter,setFilter] = useState("");
        
        const searchText = (ev) =>{
            setFilter(ev.target.value);
        }
            
          let dataSearch = Data.cardData.filter(item =>{
                    return Object.keys(item).some(key => 
                         item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())     
                    )
          });

    return(
       
       <section className='py-4 container'>
        <div className='row justify-content-centre'>

            <div className='col-12 mb-5'>
              <div className='mb-3 col-4 mx-auto text-center'>
                   
                    <input
                       type="search"
                        className='form-control'
                        value={filter}
                        onChange={searchText.bind(this)}
                        placeholder='Find Cars,Mobiles,MotorCycles and More...'
                    />
              </div>
            </div>

            {dataSearch.map((item,index)=>{
                return(
                    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
             <div className='card p-0 overflow-hidden h-100 shadow'>
                <a href='/view'>      
                <img src={item.img} className='card-img-top'/>
                </a> 
                 <div className='card-body'>
                    <a href='/view'><h5 className='cardr-title'>{item.Title}</h5></a> 
                     <p className='card-text'>{item.Description}</p>
                     <p className='card-text'>{item.Price}</p>
                 </div>
               
                       <div>
                           
                      </div>
             </div>
            </div>
                )
            })}
            
          </div>
          </section>
    )
   }
}
export default View