import React, { useState } from "react";
import logo from "../../assets/logos/shutterstock-logo.jpg";
import sort from "../../assets/icons/arrow_drop_down-24px.svg";
import "./NavBar.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav-bar'>
     
    <div className='nav-bar__div'>
        <img src={logo} alt='logo' className='nav-bar__logo'></img>
        <div  className='nav-bar__menu'>
          <h3 className='nav-bar__title'>images</h3>
          <Tippy content= 'Basic Tooltip'>
          <img
            onClick={onClickHandler}
            className='nav-bar__icon'
            src={sort}
            alt='drop down'
          ></img>
          </Tippy>
        </div>
        <div className='nav-bar__menu'>
          <h3 className='nav-bar__title'>footage</h3>
           <Tippy content= 'Basic Tooltip'>
          <img
            onClick={onClickHandler}
            className='nav-bar__icon'
            src={sort}
            alt='drop down'
          ></img>
          </Tippy>
        </div>
        <div className='nav-bar__menu'>
          <h3 className='nav-bar__title'>music</h3>
           <Tippy content= 'Basic Tooltip'>
          <img
            onClick={onClickHandler}
            className='nav-bar__icon'
            src={sort}
            alt='drop down'
          ></img>
          </Tippy>
        </div>
        <div className='nav-bar__menu'>
          <h3 className='nav-bar__title'>templates</h3>
           <Tippy content= 'Basic Tooltip'>
          <img
            onClick={onClickHandler}
            className='nav-bar__icon'
            src={sort}
            alt='drop down'
          ></img>
          </Tippy>
        </div>
      </div>
     
    </div>
  );
}

export default NavBar;
