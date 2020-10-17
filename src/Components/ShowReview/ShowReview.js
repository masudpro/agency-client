import React, { useEffect, useState } from 'react';

const ShowReview = () => {
    const [review, setReview] = useState([])
    console.log("review", review)
    useEffect(() => {
        fetch("https://peaceful-reaches-54760.herokuapp.com/getReview")
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="row justify-content-center">
            {
            review.map(review => <div key={Math.random()}  className="col-sm-6 col-lg-4 mb-4">


                <div className="feedbackContainer p-3">
                                <div className="d-flex">
                                    <div className="feedbackImage mr-3">
                                    <img src={`data:image/jpeg;base64,${review.image.img}`} />
                                    </div>
                                    <div className="feedbackName">
                                        <h4>{review.name}</h4>
                                        <h6>{review.recognition}</h6>
                                    </div>
                                </div>
                                <div className="feedbackContent">
                                    <p>{review.feedback}</p>
                                </div>
                            </div>
                 </div>
            )



            }
        </div>
    );
};

export default ShowReview;
