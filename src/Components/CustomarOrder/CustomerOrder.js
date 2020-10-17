import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminMenu from '../AdminMenu/AdminMenu';
import logo from '../Images/logo.png';

const CustomerOrder = () => {

    const [course, setCourse] = useState([])
    console.log("course", course)
    useEffect(() => {
        fetch("https://peaceful-reaches-54760.herokuapp.com/getOrder")
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div>
            <div className="container-fluid">
                <div className="row text-center py-2">
                    <div className="col-4">
                    <Link to="/" className=""> <img className="logo" src={logo} alt=""/> </Link>
                    </div>
                    <div className="col-4">
                      <h4>Customer Orders</h4>
                    </div>
                    <div className="col-4">
                      <h4></h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 pt-5">
                    <AdminMenu></AdminMenu>
                    </div>
                    <div className="bg-light-green col-lg-9 pr-lg-5 pt-5">
                        <div className="serviceContainer text-dark p-3">
                        <table className="table rounded bg-light">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Project Details</th>
                                <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
            course.map(course => <tr key={Math.random()}  className="col-sm-6 col-lg-4 mb-4">
                    <th style={{width: "150px"}}>{course.name}</th>
                    <th >{course.email}</th>
                    <th >{course.title}</th>
                    <th >{course.comment}</th>
                    <th>
                    <select style={{width: "120px"}} className="form-control" id="exampleFormControlSelect1">
                        <option>Pending</option>
                        <option>Done</option>
                        <option>On Going</option>
                     </select>
                    </th>
                       
                   
                 </tr>
                 
            )
            }
                                
                            </tbody>

     
                            </table>

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerOrder;