import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowCourse = () => {
    const [course, setCourse] = useState([])
    console.log("course", course)
    useEffect(() => {
        fetch("https://peaceful-reaches-54760.herokuapp.com/getCourse")
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])



 
    return (
        <div className="row justify-content-center">
            {
            course.map(course => <div key={Math.random()}  className="col-sm-6 col-lg-4 mb-4">
                    <Link to={`/order/${course._id}`}>
                        <div className="serviceContainer text-dark p-3">
                            <img src={`data:image/jpeg;base64,${course.image.img}`} />
                            <h6>{course.title}</h6>
                            <p>{course.description}</p>
                            <div className="servicePrice">
                            ${course.price}
                            </div>
                        </div>
                    </Link>
                 </div>
                 
            )
            }
        </div>
    );
};

export default ShowCourse;