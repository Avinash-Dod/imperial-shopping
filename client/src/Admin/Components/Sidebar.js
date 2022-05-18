import { NavLink } from "react-router-dom"

const Sidebar=()=>{
    return(
        
        <div className="wapper">
    
    <div className="side">
      <div className="toggle-wrap">
        <span className="toggle-bar"></span> 
      </div>
      <aside>
        <div className="aside-logo">
          <a href="index.html"><img src="images/logo.png" alt=" " /></a>
        </div>
        <li className="">
          <NavLink to="/dashboard" activeclassname="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" activeclassname="active">
            Orders
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" activeclassname="active">
            Products
          </NavLink>
        </li>
       

        <li>
          <NavLink to="/customers" activeclassname="active">
            Cutomers
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/reviews" activeclassname="active">
            Reviews
          </NavLink>
        </li> */}

      </aside>
    </div>
    </div>
    
    
    
    )
}
export default Sidebar