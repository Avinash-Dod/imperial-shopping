const Sidebar=()=>{
    return(
        
        <div className="wapper">
    
    <div className="side">
      <div className="toggle-wrap">
        <span className="toggle-bar"></span> 
      </div>
      <aside>
        <div className="aside-logo">
          <a href="index.html"><img src="images/logo.png" alt="" /></a>
        </div>
        <li className="active">
          <a href="index.html">
            Dashboard
          </a>
        </li>
        <li>
          <a href="customer.html">
            Customer
          </a>
        </li>

        <li>
          <a href="vendor.html">
            Vendor
          </a>
        </li>
        <li>
          <a href="rider.html">
            Rider
          </a>
        </li>

        <li>
          <a href="user.html">
            User
          </a>
        </li>
        <li>
          <a href="user.html">
            User 2
          </a>
        </li>

      </aside>
    </div>
    </div>
    
    
    
    )
}
export default Sidebar