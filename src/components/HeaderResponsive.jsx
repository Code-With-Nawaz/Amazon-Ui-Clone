import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBars,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/images/logo.png";

function HeaderResponsive() {
  return (
    <>
    <div className="res-header">
      <div className="header-responsive">
        <div className="header-res-top">
          <div className="res-top-left">
            <div className="top-hamburger-menu">
              <FontAwesomeIcon
                icon={faBars}
                style={{ height: "22px", paddingTop: "3px", width: "15px" }}
              />
            </div>
            <div className="res-top-logo">
              <img src={logo} alt="" />
            </div>
          </div>

          <div className="res-top-right">
            <div className="res-user">
              <div>Sign in </div>
              <div className="res-user-icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
            <div className="res-cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
          </div>
        </div>
        <div className="header-res-mid">
          <div className="res-search-input">
            <input type="text" placeholder="Search Amazon.in" />
          </div>
          <div className="res-search-icon">
            <span>
              {" "}
              <button>
                {" "}
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </span>
          </div>
        </div>
        <div className="header-res-mid-2">
          <div className="res-mid-2-menu">
            <ul>
              <li>
                <Link to="/">
                  <div style={{ fontSize: "0.7rem" }}>Shop by</div>
                  Category
                </Link>
              </li>
              <li>
                <Link>Your Lists</Link>
              </li>
              <li>
                <Link>Deals</Link>
              </li>
              <li>
                <Link>Sell</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="location-near-header-res">
        <div className="location-near-header-res-icon">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <div className="location-near-header-res-text"></div>
        <div className="location-near-header-adress-res">
          Deliver to
          <div>
            <select name="address" id="">
              <option value="address-1">Address 1</option>
              <option value="address-2">Address 2</option>
              <option value="address-3">Address 3</option>
              <option value="address-4">Address 4</option>
            </select>
          </div>
        </div>
      </div>
      
      
    </div>
    </>
  );
}

export default HeaderResponsive;
