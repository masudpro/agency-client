import React from 'react';
import Client1st from '../Images/airbnb.png';
import Client2nd from '../Images/google.png';
import Client3rd from '../Images/netflix.png';
import Client4th from '../Images/slack.png';
import Client5th from '../Images/uber.png';

const Clients = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2">
                <img className="img-fluid" src={Client1st} alt=""/>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2">
                <img className="img-fluid" src={Client2nd} alt=""/>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2">
                <img className="img-fluid" src={Client3rd} alt=""/>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2">
                <img className="img-fluid" src={Client4th} alt=""/>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2">
                <img className="img-fluid" src={Client5th} alt=""/>
            </div>
        </div>
    );
};

export default Clients;