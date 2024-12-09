import React from "react";
import '../public/Navbar.css'; // Correct the path and filename

const Navbar = () => {
  return (
    <div className="Navbar">
      <a href="">
        <div className="Kulturke">Kulturke</div>
      </a>
      <div className="SearchBar">
        <div className="Sample">
          <div className="Item">
            <div className="Search">Search ... </div>
          </div>
          <div className="Icon">
            <div className="Background rotate-left"></div>
            <div className="Search"></div>
            <div className="Background rotate-right"></div>
          </div>
          <div className="Vector">
            <img src="/icons/Search.png" alt="Notification-icon-white" className="Search" />
          </div>
        </div>
      </div>
      <div className="Ikonky">
        <div className="Add">
          <img src="/icons/Add.png" alt="Notification-icon-white" className="Add" />
        </div>

        <div className="NotifikiaIcon">
          <a href="#notifications">
            <img src="/icons/Notification icon-white.png" alt="Notification-icon-white" className="notification-icon-white" />
          </a>
        </div>
        <div className="UserIcon">
          <a href="#user">
            <img src="/icons/User icon-white.png" alt="User-icon-white" className="navbar-user-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;