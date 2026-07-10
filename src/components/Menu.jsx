import { Link } from "react-router-dom";
import "../styles/Menubar.css";

export default function MenuBar() {
  return (
    <div className="menu-bar">
      <div className="container">
        <ul className="menu-list">

          <li><Link to="/new-arrivals">New Arrivals</Link></li>

          <li><Link to="/m">Men</Link></li>

          <li><Link to="/w">Women</Link></li>

       

          <li><Link to="/foot">Footwear</Link></li>

          <li><Link to="/gym">Gym Equipment</Link></li>

          <li><Link to="/massager">Massagers</Link></li>

          <li><Link to="/accessorie">Accessories</Link></li>

       

     

        

   

        </ul>
      </div>
    </div>
  );
}