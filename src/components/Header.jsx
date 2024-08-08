import React, { useState } from "react";
import HeaderResponsive from './HeaderResponsive.jsx'
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import indianflag from "../assets/images/in-flag.png";
import manu_ad from "../assets/images/menu-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBars, faSearch, faShoppingCart   } from "@fortawesome/free-solid-svg-icons";


function Header() {
  // State to track whether the menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="header">
          <div className="nav-top">
            <div className="nav-logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="location">
              <div className="loc-mark">
                <FontAwesomeIcon className="" icon={faMapMarkerAlt} size="1x" />
              </div>

              <div className="loc-1">Delivering to Patna 80001</div>
              <div className="loc-2">Update Location</div>
            </div>
            <div className="searchbar">
              <div className="select">
                <div>
                  <select name="category" id="category">
                    <option value="all">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothes">Clothes</option>
                    <option value="books">Books</option>
                    <option value="furniture">Furniture</option>
                  </select>
                </div>
              </div>
              <div className="search-input">
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                />
              </div>
              <div className="search-icon">
                <span>
                  {" "}
                  <button>
                    {" "}
                    <FontAwesomeIcon icon={faSearch} size="2x" />
                  </button>
                </span>
              </div>
            </div>
            <div className="region">
              <div>
                <img src={indianflag} alt="" />
              </div>
              <div>
                <select name="lang" id="">
                  <option value="eng">EN</option>
                  <option value="hin">Hindi</option>
                </select>
              </div>
            </div>
            <div className="sign-in-section">
              <div className="greet-signin">Hello, sign in</div>
              <div className="account-list">
                <select>
                  <option value="account">Account & Lists</option>
                  <option value="orders">Orders</option>
                  <option value="wishlist">Wishlist</option>
                  <option value="prime">Prime</option>
                </select>
              </div>
            </div>
            <div className="return-order-section">
              <div className="return">Returns</div>
              <div className="order">& Orders</div>
            </div>
            <div className="cart">
              <div className="cart-icon">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
              </div>
            </div>
          </div>

          <div className="nav-main">
            <nav className="navbar">
              <div className="all-category">
                {/* Button to toggle the menu */}
                <button
                  className={`menu-toggle ${isOpen ? "active" : ""}`}
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    size="1x"
                    style={{ color: "white" }}
                  />
                  <span className="all-cat-btn">All</span>
                </button>
                <div />

                {/* All category menu */}
                <div className={`menu ${isOpen ? "active" : ""}`}>
                  <ul>
                    <li>
                      <Link to="/">Electronics</Link>
                    </li>
                    <li>
                      <Link to="/">Mobiles</Link>
                    </li>
                    <li>
                      <Link to="/">Best Sellers</Link>
                    </li>
                    <li>
                      <Link to="/">Today's Deals</Link>
                    </li>
                    <li>
                      <Link to="/">Fashion</Link>
                    </li>
                    <li>
                      <Link to="/">New Releases</Link>
                    </li>
                    <li>
                      <Link to="/">Customer Service</Link>
                    </li>
                    <li>
                      <Link to="/">Amazon Pay</Link>
                    </li>
                    <li>
                      <Link to="/">Computers</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Amazon miniTV
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Sell
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Best Sellers
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Today's Deals
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Mobiles
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Prime
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Customer Service
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Electronics
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Fashion
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  New Releases
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Home & Kitchen
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Amazon Pay
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Computers
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Books
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Car & Motorbike
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Gift Ideas
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Beauty & Personal Care
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Gift Cards
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Toys & Games
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Sports, Fitness & Outdoors
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Grocery & Gourmet Foods
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Health, Household & Personal Care
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Custom Products
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Baby
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Video Games
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Pet Supplies
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Audible
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  AmazonBasics
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Subscribe & Save
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Coupons
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Kindle eBooks
                </Link>
              </div>
            </nav>

            <div className="menu_Ad">
              <img src={manu_ad} alt="" />
            </div>
          </div>
        </div>

        {/* responsive header  */}
        <HeaderResponsive/>

      </header>
    </>
  );
}

export default Header;
