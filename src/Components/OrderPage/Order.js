import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Ordermenu from '../Order-Menu/Ordermenu';
import logo from '../Images/logo.png';
const Order = () => {

    const {id} = useParams();
    const history = useHistory();
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const [interestCourse, setInterestCourse] = useState([])

    const findCourse = interestCourse.find( pd => pd._id === id);
    
    console.log("course", interestCourse)
    useEffect(() => {
        fetch("https://peaceful-reaches-54760.herokuapp.com/getCourse")
            .then(res => res.json())
            .then(data => setInterestCourse(data))
    }, [])



    
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

    const handleAddCourse = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', loggedInUser.name)
        formData.append('email', loggedInUser.email)
        formData.append('title', findCourse.title)
        formData.append('comment', info.comment)
        formData.append('price', findCourse.price)
      
        fetch('https://peaceful-reaches-54760.herokuapp.com/addOrder', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
        if (data) {
            alert("Ok")
            console.log(data)
         history.push("/servicelist")
        }else{
            console.log("Rana tOI PAROS NA")
        }
          
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
                        Order Now
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
                
                     <form className="loginForm pr-lg-5  mr-lg-5"  onSubmit={handleAddCourse}> 
                        
                            <div className="form-group">
                            
                                {findCourse && <input onBlur={handleBlur} type="text" name="name"  className="form-control" placeholder="Your Name / Company Name" required value={loggedInUser.name} />}

                               {findCourse && <input onBlur={handleBlur} name="email" type="email"  className="form-control" placeholder="Email Address" value={loggedInUser.email} />}

                                {findCourse && <input onBlur={handleBlur}  type="text" name="title"  className="form-control" placeholder="Your Name" required value={findCourse.title} disabled />} 

                                {findCourse && <textarea onBlur={handleBlur} type="text" name="comment"  className="form-control" placeholder="Write Something" />}

                                <div className="d-flex">
                                    {findCourse && <input onBlur={handleBlur} type="text" name="price"  className="form-control mr-2" placeholder="Your Name" value={findCourse.price} disabled/>}

                                    {findCourse && <input onChange={handleFileChange} type="file" name="file" className="form-control ml-2" placeholder="Upload a course Photo" required />}
                                </div>           
                            </div>

                            <div className="">
                            {/* {findCourse &&  <button className="themeBlueButton" >SUBMIT REVIEW </button> } */}

                            {findCourse ? <button className="themeBlueButton" >Buy Now </button> : <Link to="/" className="themeBlueButton" >Select A New course </Link>}
                               
                            </div>
                        </form>
                    </div>

                </div>
                </div>
        </div>
    );
};

export default Order;