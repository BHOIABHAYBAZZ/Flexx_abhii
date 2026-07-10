import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import NewArrivals from "../Pages/NewArrivals";
import Men from "../Pages/Men";
import Women from "../Pages/Women";

import Footwear from "../Pages/Footwear";
import GymEquipment from "../Pages/GymEquipment";
import Massagers from "../Pages/Massagers";
import Accessories from "../Pages/Accessories";




import MenuBar from "../components/Menu";

import Category from "../components/Category";
import Productdetail from "../components/Productdetail";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Success from "../components/Success";
import Login from "../components/Login";
import Register from "../components/Register";


export default function Routing() {
  return (
    <div>
      <MenuBar />

      <Routes>
       
        <Route path="/" element={<Home/>} />

      
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/m" element={<Men />} />
        <Route path="/w" element={<Women />} />

        <Route path="/foot" element={<Footwear />} />
        <Route path="/gym" element={<GymEquipment />} />
        <Route path="/massager" element={<Massagers />} />
        <Route path="/accessorie" element={<Accessories />} />
     
     

    

           <Route path="/:category" element={<Category/>}/>
        <Route path="/:category/:id" element={<Productdetail/>}/>
       <Route path="/cart" element={<Cart />} />
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/success" element={<Success/>} />
       

       
      </Routes>


    
      
    </div>
  );
}
