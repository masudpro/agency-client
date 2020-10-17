import React from 'react';
import weblogo from '../Images/service1.png'
import feedbackImage from '../Images/customer-2.png'
import banner from '../Images/Frame.png'
import Header from '../Header/Header';
import ShowCourse from '../ShowCourse/ShowCourse';
import SampleWorks from '../SampleWorks/SampleWorks';
import ShowReview from '../ShowReview/ShowReview';
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';
const Home = () => { 
    return (
        <div>
            <Header></Header>
            <section className="banner d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-5 bannerContainer py-5 mt-md-3 pr-lg-5  order-12 order-lg-1">
                            <h1>Let’s Grow Your Brand To The Next Level</h1>
                            <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <button className="themeBlueButton">Hire us</button>
                        </div>
                        <div className="col-lg-7 bannerContainer  order-1 order-lg-12 ">
                            <img className="img-fluid" src={banner} alt=""/>
                        </div>
                    </div>
                </div>

            </section>
            <section className="ourClients py-5 ">
            <div className="container">
               <Clients></Clients>
            </div>
            </section>
            <section className="service">
                <div className="container">
                <h1 className="defaultHeading">Provide awesome <span> services</span></h1>
                
                     <ShowCourse></ShowCourse>
               
                </div>            
            </section>
            <section className="works text-white py-5">
                <div className="container">
                    <h1 className="defaultHeading">Here are some of <span> our works</span></h1>
                    <div className="row">
                        <div className="col-12">
                         <SampleWorks></SampleWorks>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feedback">
                <div className="container">
                    <h1 className="defaultHeading">Clients <span> Feedback</span></h1>
                    <ShowReview></ShowReview>
                    
                </div>
            </section>
            <section className="contact pb-1">
              <div className="container">
              <Contact></Contact>
              </div>
              <p className="text-center pt-3 pt-md-5">copyright Orange labs 2020</p>
            </section>
        </div>
    );
};

export default Home;