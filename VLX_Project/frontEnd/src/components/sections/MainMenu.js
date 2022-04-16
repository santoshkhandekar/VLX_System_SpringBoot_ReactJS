import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
  import Help from "./Help";
  import Home from "./Home";
  import Sellerhome from "./Sellerhome";
  import SellerReg from "./SellerReg";
  import Userhome from "./Userhome";
  import UserReg from "./UserReg";
  
  import EditProfile from "../Pages/EditProfile";
  import Admin from "./Admin";
import SearchProducts from "../Pages/SearchProducts";
import Basic from "../Membership/Basic";
import Membership from "../Membership/Membership";
import Silver from "../Membership/Silver";
import Gold from "../Membership/Gold";
import Login from "./Login";
import AddProducts from "../Pages/AddProducts";
import View from "./View";
import Delete from "../Pages/Delete";
import GetSeller from "../Pages/GetSeller";
import GetUser from "../Pages/GetUser";
  function MainMenu(){
    return(
      <BrowserRouter>

<nav>
           
           <div class="nav-bg"></div>
             

          <Link to="/Userhome"></Link>
          <Link to="/Sellerhome"></Link>
          <Link to="/editProfile"></Link>
          <Link to="/admin"></Link>
          <Link to="/searchproducts"></Link>
          <Link to="/membership"></Link>
          <Link to="/basic"></Link>
          <Link to="/silver"></Link>
          <Link to="/gold"></Link>
          <Link to="/addProducts"></Link>
          <Link to="/view"></Link>
          <Link to="/delete"></Link>
          <Link to="/getseller"></Link>
          <Link to="/getuser"></Link>

  
     </nav>


             <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/userReg' element={<UserReg/>} exact/>
        <Route path='/sellerReg' element={<SellerReg/>} exact/>
        <Route path='/Userhome' element={<Userhome/>}/>
        <Route path='/Sellerhome' element={<Sellerhome/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/editProfile' element={<EditProfile/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/searchproducts' element={<SearchProducts/>}/>
        <Route path='/membership' element={<Membership/>}/>
        <Route path='/basic' element={<Basic/>}/>
        <Route path='/silver' element={<Silver/>}/>
        <Route path='/gold' element={<Gold/>}/>
        <Route path="/addProducts" element={<AddProducts/>}/>
        <Route path="/view" element={<View/>}/>
        <Route path="/delete" element={<Delete/>}/>
        <Route path="/getuser" element={<GetUser/>}/>
        <Route path="/getseller" element={<GetSeller/>}/>

      </Routes>

             
              
  
     </BrowserRouter>
    )
  }
  export default MainMenu