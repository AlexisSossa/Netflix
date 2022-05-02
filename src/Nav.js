import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "./images/580b57fcd9996e24bc43c529.png";
import avatar from "./images/Netflix-avatar.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [show, handleShow] = useState();
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className='nav__contents'>
        <img
          onClick={() => navigate("/")}
          className='nav__logo'
          src={logo}
          alt=''
        />

        <img
          onClick={() => navigate("/profile")}
          className='nav__avatar'
          src={avatar}
          alt=''
        />
      </div>
    </div>
  );
};

export default Nav;
