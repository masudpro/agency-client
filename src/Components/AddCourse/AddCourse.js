import React, {  useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminMenu from '../AdminMenu/AdminMenu';
import logo from '../Images/logo.png';

const AddCourse = () => {

  

    const [info, setInfo] = useState({});
    const [file, setFile] =useState(null);

    console.log(info)
    const handleBlur = (e) =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile)
    }


    const handleAddCourse = () => {
      const formData = new FormData()
      formData.append('file', file);
      formData.append('title', info.title)
      formData.append('price', info.price)
      formData.append('description', info.description)
      
        fetch('https://peaceful-reaches-54760.herokuapp.com/addCourses', {
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
             
             <div className="container-fluid ">

                <div className="row text-center py-2">
                      <div className="col-4">
                      <Link to="/" className=""> <img className="logo" src={logo} alt=""/> </Link>
                      </div>
                      <div className="col-4">
                        <h4> Add a Course</h4>
                      </div>
                      <div className="col-4">
                        <h4></h4>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-md-3 pt-5">
                      <AdminMenu></AdminMenu>
                      </div>
                      <div className="col-md-9 bg-light-green pr-lg-5 pt-5">
                        <form className="loginForm pr-lg-5  mr-lg-5" onSubmit={handleAddCourse} > 
                              <div className="form-group">
                                  
                                  <input onBlur={handleBlur} type="text" name="title"  className="form-control" placeholder="Course Name" required />
                                  <input onBlur={handleBlur} name="description" type="text"  className="form-control" placeholder="Type short Description" required />
                                  <input onBlur={handleBlur} type="text" name="price"  className="form-control" placeholder="Course Price" required />

                                  <input onChange={handleFileChange} type="file" name="file" className="form-control" placeholder="Upload a course Photo" required />

                                  
                              </div>

                              <div className="">
                                  <button className="themeBlueButton" >ADD COURSE</button>
                                  
                              </div>
                          </form>
                      </div>

                  </div>
                </div>
        </div>
    );
};

export default AddCourse;


