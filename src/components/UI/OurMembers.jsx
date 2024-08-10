import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import "../../styles/our-member.css";

const OUR__MEMBERS = [
  {
    name: "Car 24",
    experience: "All in one on cars",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR_-k0U-meDId8ekch0kgbNZ9aoGgdEkRufZblXLfhO0edNmB3r6QUeSct-_woJVNK97w&usqp=CAU",
  },

  {
    name: "Bike and Car Service",
    experience: "Full Service",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_TGT-blBQPJ4O-sT1k3CjMDJIxjM_poKjdoGJKWZ7x8XF4-Lf3Y88bnixermaMfznsik&usqp=CAU",
  },

  {
    name: "H and m Service",
    experience: "Bike and Car service",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmGqQmeUeS6sLSk_PJBZYKDl-ILn6ZLH9nrw3XAYwZTu2QKQKUoYDHrnA3ORqctnDi-hg&usqp=CAU",
  },

  {
    name: "car Garrage",
    experience: "Full service",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://media.istockphoto.com/id/817262602/vector/car-service-and-repair-center-or-garage-with-worker.jpg?s=612x612&w=is&k=20&c=RC_j6XQ2XzBcwBc5W8iNeXmsOgmkbmCVrcxCucG0Z58=",
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
