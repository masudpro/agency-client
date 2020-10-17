import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Ordermenu from '../Order-Menu/Ordermenu';
import logo from '../Images/logo.png';
const AddReview = () => {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
   


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
        formData.append('name', info.name)
        formData.append('recognition', info.recognition)
        formData.append('feedback', info.feedback)
      
        fetch('https://peaceful-reaches-54760.herokuapp.com/addReview', {
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
                       <h4> Add A feedback</h4>
                    </div>
                    <div className="col-4">
                    <h4> {loggedInUser.email}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 pt-5">
                        <Ordermenu></Ordermenu>
                    </div>
                    <div className="col-md-9 bg-light-green pr-lg-5 pt-5">
                     <form className="loginForm pr-lg-5  mr-lg-5" onSubmit={handleAddCourse} > 
                            <div className="form-group">
                               
                                <input onBlur={handleBlur} type="text" name="name"  className="form-control" placeholder="Your Name" required />
                                <input onBlur={handleBlur} name="recognition" type="recognition"  className="form-control" placeholder="Recognition, Office Name" required />
                                <textarea onBlur={handleBlur} type="text" name="feedback"  className="form-control" placeholder="Write your Feedback" required />

                                <input onChange={handleFileChange} type="file" name="file" className="form-control" placeholder="Upload a course Photo" required />

                               
                            </div>

                            <div className="">
                                <button className="themeBlueButton" >SUBMIT REVIEW </button>
                               
                            </div>
                        </form>
                    </div>

                </div>
                </div>
        </div>
    );
};

export default AddReview;
