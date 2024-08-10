import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";


const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I've been using Wheel Bro for the past six months, and I can't recommend it highly enough. From the moment I started using their services, my experience has been nothing short of exceptional. The system’s intuitive interface makes scheduling appointments a breeze, and the real-time updates on my vehicle’s status keep me informed every step of the way.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src="https://howtodrawforkids.com/wp-content/uploads/2023/04/how-to-draw-a-cartoon-human.jpg" alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Happy Customer</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        What truly stands out is their commitment to reliability and customer satisfaction. Every service appointment has been punctual and thorough, with their technicians always going the extra mile to ensure my vehicle runs smoothly. The system’s comprehensive diagnostic tools have caught issues before they became serious problems, saving me both time and money.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src="https://howtodrawforkids.com/wp-content/uploads/2023/05/how-to-draw-a-cartoon-boy.jpg" alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Satisfied Customer</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Customer support is top-notch as well. Whenever I've had questions or needed assistance, their team has been responsive and helpful, demonstrating a genuine dedication to resolving any concerns
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src="https://img.freepik.com/premium-vector/woman-cartoon-icon-avatar-people-person-human-theme-isolated-design-vector-illustration_25030-10955.jpg" alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Sweet One</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Overall,Wheell Bro has revolutionized the way I maintain my vehicle. It offers peace of mind knowing that my car is in capable hands and that I can trust the service I receive. If you're looking for a reliable and user-friendly vehicle service solution, I wholeheartedly recommend "Wheel Bro".
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src="https://thumbs.dreamstime.com/b/cartoon-woman-icon-person-design-vector-graphic-concept-represented-isolated-flat-illustration-73697107.jpg" alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Good One</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
