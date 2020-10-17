import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Ordermenu from '../Order-Menu/Ordermenu';
import logo from '../Images/logo.png';
const Servicelist = () => {



    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const [orderCourse, setOrderCourse] = useState([])
   
    console.log(orderCourse, loggedInUser)
    useEffect(() => {
        fetch("https://peaceful-reaches-54760.herokuapp.com/showOrder?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrderCourse(data)
            })
    }, [])


    return (
        <div>
           <div className="container-fluid">
                <div className="row text-center py-2">
                    <div className="col-4">
                    <Link to="/" className=""> <img className="logo" src={logo} alt=""/> </Link>
                    </div>
                    <div className="col-4">
                       <h4> You Ordered {orderCourse.length} Items</h4>
                    </div>
                    <div className="col-4">
                    <h4> {loggedInUser.email}</h4>
                    </div>
                </div>
               <div className="row">
                   <div className="col-md-3">
                       <Ordermenu></Ordermenu>
                   </div>
                   <div className="bg-light-green col-md-9 pr-lg-5 ">
                       <div className=" text-dark p-3 ">
                       <div className="row">
                               
                            {
                                orderCourse.map(orderCourse => <div className="col-6 col-lg-4" key={orderCourse._id} >

                                    <div className=" serviceList stext-dark p-3">
                                        <img src={`data:image/jpeg;base64,${orderCourse.img.img}`} />
                                        <h6>{orderCourse.title}</h6>
                                        <p>{orderCourse.comment}</p>
                                        
                                    </div>

                                </div>)
                            }
                        </div>
                           
                        </div>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Servicelist;