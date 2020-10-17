import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Ordermenu = () => {
  
    return (
        <div>
            <nav class="navbar text-dark">
            <ul class="navbar-nav m-auto">
            <li className="nav-item mb-3">
              <Link to="/order/:id">ORDER</Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/servicelist">SERVICE LIST</Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/addreview">REVIEWS</Link>
            </li>
           
            </ul>
             
                
        </nav>
        </div>
    );
};

export default Ordermenu;