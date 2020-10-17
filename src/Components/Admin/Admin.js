import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminMenu from '../AdminMenu/AdminMenu';
import logo from '../Images/logo.png';

const Admin = () => {

    const [adminEmail, setAdminEmail] = useState([])
    useEffect(() => {
        fetch("https://peaceful-reaches-54760.herokuapp.com/loginAdmin")
            .then(res => res.json())
            .then(data => setAdminEmail(data))
    }, [])



    const [info, setInfo] = useState({});
    console.log(info)
    const handleBlur = (e) =>{
        e.preventDefault()
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
    console.log( adminEmail, info.name) 



    return (
        <div>
        <div className="container-fluid">
        <div className="row justify-content-center text-center py-2">
                    <div className="col-4">
                    <Link to="/" className=""> <img className="logo" src={logo} alt=""/> </Link>
                    </div>
                    <div className="col-4">
                      <h4> Add a Course</h4>
                    </div>
                    <div className="col-4">
                      <h4>Admin Email</h4>
                    </div>
                </div>
                    <div className="row justify-content-center bg-light-green">
                <div className="col-md-6 mt-5 pt-5">
                     <form className="loginForm  "  > 
                            <div className="form-group w-100">
                                <input onBlur={handleBlur} type="email" name="email"  className="form-control" placeholder="Your Name" required /> 
                            </div>
                               
                             <Link to="/customerorder" style={{ width: "200px", display: "inline-block"}} className="themeBlueButton text-center pt-2" >Loin </Link>
                               
                            
                        </form>
                    </div>
                    </div>
                 
        </div>
     </div>
    );
};

export default Admin;