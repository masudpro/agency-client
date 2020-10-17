import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import work1st from '../Images/carousel-1.png';
import work2nd from '../Images/carousel-2.png';
import work3rd from '../Images/carousel-3.png';
import work4th from '../Images/carousel-4.png';
import work5th from '../Images/carousel-5.png';


const SampleWorks = () => {


    
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 991 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 991, min: 576 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
    

    return (
        <div>
                <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
               autoPlay={ true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all 1s linear"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className="pb-5 "
                >
                <div className="p-3"><img class="img-fluid" src={work1st} alt=""/></div>
                <div className="p-3"><img class="img-fluid" src={work2nd} alt=""/></div>
                <div className="p-3"><img class="img-fluid" src={work3rd} alt=""/></div>
                <div className="p-3"><img class="img-fluid" src={work4th} alt=""/></div>
                <div className="p-3"><img class="img-fluid" src={work5th} alt=""/></div>
                </Carousel>


        
        </div>
    );
};

export default SampleWorks;