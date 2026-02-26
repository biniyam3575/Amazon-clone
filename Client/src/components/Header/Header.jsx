import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { BiCaretDown } from "react-icons/bi";
import flag from '../../assets/icons/image.png'; 
import cart from '../../assets/icons/cart.png';
import classes from './Header.module.css'; 

const Header = () => {
  return (
    <header className={classes.amazon_header}>
      <div className={classes.inner_container}>
        
        {/* Logo */}
        <div className={classes.header_logo_container}>
          <a href="/">
            <img className={classes.logo} src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
          </a>
        </div>

        {/* Delivery */}
        <div className={classes.header_delivery}>
          <SlLocationPin className={classes.location_icon} size={20} />
          <div className={classes.delivery_text}>
            <p className={classes.text_light}>Deliver to</p>
            <span className={classes.text_bold}>Ethiopia</span>
          </div>
        </div>

        {/* Search */}
        <div className={classes.header_search}>
          <select className={classes.search_select}>
            <option value="">All</option>
          </select>
          <input className={classes.search_input} type="text" placeholder='Search Amazon' />
          <div className={classes.search_icon_wrapper}>
            <IoMdSearch size={25} />
          </div>
        </div>

        {/* Nav Right */}
        <div className={classes.header_nav_right}>
          <div className={classes.language_select}>
            <img src={flag} alt="flag" className={classes.flag_img} />
            <span className={classes.text_bold}>
              EN <BiCaretDown className={classes.caret} />
            </span>
          </div>

          <a href="/" className={classes.nav_item}>
            <p className={classes.text_light}>Hello, sign in</p>
            <span className={classes.text_bold}>
              Account & Lists <BiCaretDown className={classes.caret} />
            </span>
          </a>

          <a href="/" className={classes.nav_item}>
            <p className={classes.text_light}>Returns</p>
            <span className={classes.text_bold}>& Orders</span>
          </a>

          {/* Fixed Cart */}
          <a href="/" className={classes.cart_container}>
            <div className={classes.cart_icon_wrapper}>
                <span className={classes.cart_count}>0</span>
                <img src={cart} alt="cart" className={classes.cart_image} />
            </div>
            <span className={classes.nav_cart_text}>Cart</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;