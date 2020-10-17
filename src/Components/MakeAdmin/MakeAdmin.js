import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminMenu from '../AdminMenu/AdminMenu';
import logo from '../Images/logo.png';

const MakeAdmin = () => {
  

    const [info, setInfo] = useState({});
   
    console.log(info)
   
    const handleBlur = (e) =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleAddCourse = () => {
        const formData = new FormData()
        formData.append('email', info.email)
        fetch('https://peaceful-reaches-54760.herokuapp.com/makeAdmin', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
      }
      


    return (
        <div>
        <div className="container-fluid">
        <div className="row text-center py-2">
                    <div className="col-4">
                    <Link to="/" className=""> <img className="logo" src={logo} alt=""/> </Link>
                    </div>
                    <div className="col-4">
                      <h4>Make an Admin </h4>
                    </div>
                    <div className="col-4">
                    </div>
                </div>
            <div className="row">
                <div className="col-md-3 pt-5">
                   <AdminMenu></AdminMenu>
                </div>
                <div className="bg-light-green col-md-9 pr-lg-5 pt-5">
                    <div className=" ">
                        <div className=" ">
                                <form className="loginForm pr-lg-5  mr-lg-5 d-flex" onSubmit={handleAddCourse} > 
                                        <div className="form-group w-100">
                                            <input onBlur={handleBlur} type="email" name="email"  className="form-control" placeholder="Make A ADMIN" required /> 
                                        </div>

                                        <div className="">
                                            <button className="themeBlueButton" >SUBMIT REVIEW </button>
                                        
                                        </div>
                                    </form>
                                </div>
                        </div>
                </div>
            </div>
        </div>
     </div>
    );
};

export default MakeAdmin;
