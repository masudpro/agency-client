import React from 'react';
import { Link, useParams } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <div>
            <nav class="navbar text-dark">
            
            <ul class="navbar-nav m-auto">
            
            <li className="nav-item mb-3">
              <Link to="/customerorder">SERVICE LIST</Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/addcourse">ADD SERVICE</Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/makeadmin">MAKE  ADMIN </Link>
            </li>
           
            </ul>
             
                
        </nav>
        </div>
  );
};

export default AdminMenu;