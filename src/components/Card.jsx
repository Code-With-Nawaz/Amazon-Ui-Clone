import React, {} from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/images/card-image/Aug-offer.jpg";
import cushion_covers from "../assets/images/card-image/cushion-covers.jpg";
import Figurines from "../assets/images/card-image/Figurines.jpg";
import Home_storage from "../assets/images/card-image/Home storage.jpg";
import Lighting_solutions from "../assets/images/card-image/Lighting solutions.jpg";
import Air_conditioners from "../assets/images/card-image/Air conditioners.jpg";
import Refrigerators from "../assets/images/card-image/Refrigerators.jpg";
import Microwaves from "../assets/images/card-image/Microwaves.jpg";
import Washing_machines from "../assets/images/card-image/Washing machines.jpg";
import boat from "../assets/images/card-image/boat.jpg";
import boult from "../assets/images/card-image/boult.jpg";
import noise from "../assets/images/card-image/noise.jpg";
import zebronics from "../assets/images/card-image/zebronics.jpg";
import Cleaning_accessories from "../assets/images/card-image/Cleaning accessories.jpg";
import Tyre from "../assets/images/card-image/Tyre & rim care.jpg";
import Helmets from "../assets/images/card-image/Helmets.jpg";
import Vacuum_cleaner from "../assets/images/card-image/Vacuum cleaner.jpg";
import women_clothing from "../assets/images/card-image/Women_Clothing.jpg";
import footwear_handbag from "../assets/images/card-image/Footwear_Handbags.jpg";
import Watches from "../assets/images/card-image/Watches.jpg";
import jewellery from "../assets/images/card-image/Fashion jewellery.jpg";
import Professional_tools from "../assets/images/card-image/Professional tools.jpg";
import Measuring_instruments from "../assets/images/card-image/Measuring instruments.jpg";
import Cleaning_supplies from "../assets/images/card-image/Cleaning supplies.jpg";
import Medical_supplies from "../assets/images/card-image/Medical supplies.jpg";
import clothingaccessories1 from "../assets/images/clothing-accessories/clothing-accessories1.jpg";
import clothingaccessories2 from "../assets/images/clothing-accessories/clothing-accessories2.jpg";
import clothingaccessories3 from "../assets/images/clothing-accessories/clothing-accessories3.jpg";
import clothingaccessories4 from "../assets/images/clothing-accessories/clothing-accessories4.jpg";
import clothingaccessories5 from "../assets/images/clothing-accessories/clothing-accessories5.jpg";
import clothingaccessories6 from "../assets/images/clothing-accessories/clothing-accessories6.jpg";
import clothingaccessories7 from "../assets/images/clothing-accessories/clothing-accessories7.jpg";
import clothingaccessories8 from "../assets/images/clothing-accessories/clothing-accessories8.jpg";
import clothingaccessories9 from "../assets/images/clothing-accessories/clothing-accessories9.jpg";
import clothingaccessories10 from "../assets/images/clothing-accessories/clothing-accessories10.jpg";
import clothingaccessories11 from "../assets/images/clothing-accessories/clothing-accessories11.jpg";
import clothingaccessories12 from "../assets/images/clothing-accessories/clothing-accessories12.jpg";
import clothingaccessories13 from "../assets/images/clothing-accessories/clothing-accessories13.jpg";
import clothingaccessories14 from "../assets/images/clothing-accessories/clothing-accessories14.jpg";
import clothingaccessories15 from "../assets/images/clothing-accessories/clothing-accessories15.jpg";
import clothingaccessories16 from "../assets/images/clothing-accessories/clothing-accessories16.jpg";
import clothingaccessories17 from "../assets/images/clothing-accessories/clothing-accessories17.jpg";
import clothingaccessories18 from "../assets/images/clothing-accessories/clothing-accessories18.jpg";
import clothingaccessories19 from "../assets/images/clothing-accessories/clothing-accessories19.jpg";
import Slider from "./Slider.jsx";
function Card() {
  function slidenext() {
    var slide = document.querySelector('.image-slide');
    slide.scrollTo({
      left: slide.scrollLeft + 1200,
      behavior: 'smooth'
    });
  }
  
  function slideprev() {
    var slide = document.querySelector('.image-slide');
    slide.scrollTo({
      left: slide.scrollLeft - 1200,
      behavior: 'smooth'
    });
  }
  return (
    <>
    <Slider/>
      <div className="card-container">
        <div className="card-section">
          {/* first row  */}
          <div className="card-first-row">
            <div className="card" name="Freedom-Sale">
              <div className="card-content">
                <h2>Great Freedom Sale | Coming soon</h2>
              </div>
              <div className="card-image">
                <img src={image1} alt="" />
              </div>
              <div className="card-link">
                <Link to="/">See all offers</Link>
              </div>
            </div>
            <div className="card" name="Revamp your home">
              <div className="card-content">
                <h2>Revamp your home in style</h2>
              </div>
              <div className="card-image-home">
                <div>
                  <img src={cushion_covers} alt="" />
                  <span>Cushion covers, bedsheets & more</span>
                </div>
                <div>
                  <img src={Figurines} alt="" />

                  <span>Figurines, vases & more</span>
                </div>
                <div>
                  <img src={Home_storage} alt="" />

                  <span>Home storage</span>
                </div>
                <div>
                  <img src={Lighting_solutions} alt="" />

                  <span>Lighting solutions</span>
                </div>
              </div>
              <div className="card-link">
                <Link to="/">Explore all</Link>
              </div>
            </div>

            <div className="card" name="Appliances">
              <div className="card-content">
                <h2>Appliances for your home | Up to 55% off</h2>
              </div>
              <div className="card-image-home">
                <div>
                  <img src={Air_conditioners} alt="" />
                  <span>Air conditioners</span>
                </div>
                <div>
                  <img src={Refrigerators} alt="" />

                  <span>Refrigerators</span>
                </div>
                <div>
                  <img src={Microwaves} alt="" />

                  <span>Microwaves</span>
                </div>
                <div>
                  <img src={Washing_machines} alt="" />

                  <span>Washing Machines</span>
                </div>
              </div>
              <div className="card-link">
                <Link to="/">See more</Link>
              </div>
            </div>

            <div className="card-signin" name="signin and ad">
              <div className="card-1">
                <div className="card-content">
                  <div>
                    <h2>Sign in for your best experience</h2>
                  </div>
                  <div className="card-button">
                    <button>Sign in securely</button>
                  </div>
                </div>
              </div>
              <div className="card-2">
                <div className="card-image">
                  <img src={image1} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* second row  */}
          <div className="card-second-row">
            <div className="card" name="Headphones">
              <div className="card-content">
                <h2>Starting ₹149 | Headphones</h2>
              </div>
              <div className="card-image-home">
                <div>
                  <img src={boat} alt="" />
                  <span>Starting ₹249 | boAt</span>
                </div>
                <div>
                  <img src={boult} alt="" />

                  <span>Starting ₹349 | boult</span>
                </div>
                <div>
                  <img src={noise} alt="" />

                  <span>Starting ₹649 | Noise</span>
                </div>
                <div>
                  <img src={zebronics} alt="" />

                  <span>Starting ₹149 | Zebronics</span>
                </div>
              </div>
              <div className="card-link">
                <Link to="/">See all offers</Link>
              </div>
            </div>
            <div className="card" name="Automotive essentials">
              <div className="card-content">
                <h2>Automotive essentials | Up to 60% off</h2>
              </div>
              <div className="card-image-home">
                <div>
                  <img src={Cleaning_accessories} alt="" />
                  <span>Cleaning accessories</span>
                </div>
                <div>
                  <img src={Tyre} alt="" />

                  <span>Tyre & rim care</span>
                </div>
                <div>
                  <img src={Helmets} alt="" />

                  <span>Helmets</span>
                </div>
                <div>
                  <img src={Vacuum_cleaner} alt="" />
                  <span>Vacuum cleaner</span>
                </div>
              </div>
              <div className="card-link">
                <Link to="/">See more</Link>
              </div>
            </div>

            <div className="card" name="Styles for women">
              <div className="card-content">
                <h2>Up to 60% off | Styles for women</h2>
              </div>
              <div className="card-image-home">
                <div>
                  <img src={women_clothing} alt="" />
                  <span>Women's Clothing</span>
                </div>
                <div>
                  <img src={footwear_handbag} alt="" />

                  <span>Footwear+Handbags</span>
                </div>
                <div>
                  <img src={Watches} alt="" />

                  <span>Watches</span>
                </div>
                <div>
                  <img src={jewellery} alt="" />
                  <span>Fashion jewellery</span>
                </div>
              </div>
              <div className="card-link">
                <Link to="/">End of season sale</Link>
              </div>
            </div>
            <div className="card" name="Professional tools">
              <div className="card-content">
                <h2>Up to 60% off | Professional tools.....</h2>
              </div>
              <div className="card-image-home">
                <div>
                  <img src={Professional_tools} alt="" />
                  <span>Professional tools</span>
                </div>
                <div>
                  <img src={Measuring_instruments} alt="" />

                  <span>Measuring instruments</span>
                </div>
                <div>
                  <img src={Cleaning_supplies} alt="" />

                  <span>Cleaning Supplies</span>
                </div>
                <div>
                  <img src={Medical_supplies} alt="" />
                  <span>Medical supplies</span>
                </div>
              </div>
              <div className="card-link">
                <Link to="/">See more</Link>
              </div>
            </div>
          </div>
          {/* third row  */}
          <div className="card-third-row-full">
            <div className="card-content">
              <h2>Best Sellers in Clothing & Accessories</h2>
            </div>
            <div className="gallery-container">
              
            <div className="third-row-btn">
              <button className="prev-button-sec-3" onClick={slideprev}> &#10094;</button>
              <button className="next-button-sec-3" onClick={slidenext}>  &#10095;</button>
            </div>
              <div className="image-slide">
                <div>
                  <img src={clothingaccessories1} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories2} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories3} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories4} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories5} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories6} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories7} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories8} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories9} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories10} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories11} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories12} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories13} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories14} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories15} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories16} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories17} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories18} alt="" />
                </div>
                <div>
                  <img src={clothingaccessories19} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
