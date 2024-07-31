import React from "react";
import { Link } from "react-router-dom";

function FooterBottom() {
  return (
    <>
      <div className="footer-bottom">
        <div className="footer-bottom-1">
          <table className="footer-table">
            <tbody>
              <tr>
                <td>
                  <Link to="/">
                    AbeBooks
                    <br />
                    <span>
                      Books, art
                      <br />& collectibles
                    </span>
                  </Link>
                </td>
                <td></td>
                <td>
                  <Link to="/">
                    Amazon Web Services
                    <br />
                    <span>
                      Scalable Cloud
                      <br />
                      Computing Services
                    </span>
                  </Link>
                </td>
                <td></td>
                <td>
                  <Link to="/">
                    Audible
                    <br />
                    <span>
                      Download
                      <br />
                      Audio Books
                    </span>
                  </Link>
                </td>
                <td></td>
                <td>
                  <Link to="/">
                    IMDb
                    <br />
                    <span>
                      Movies, TV
                      <br />& Celebrities
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/">
                    Shopbop
                    <br />
                    <span>
                      Designer
                      <br />
                      Fashion Brands
                    </span>
                  </Link>
                </td>
                <td></td>
                <td>
                  <Link to="/">
                    Amazon Business
                    <br />
                    <span>
                      Everything For
                      <br />
                      Your Business
                    </span>
                  </Link>
                </td>
                <td></td>
                <td>
                  <Link to="/">
                    Prime Now
                    <br />
                    <span>
                      2-Hour Delivery
                      <br />
                      on Everyday Items
                    </span>
                  </Link>
                </td>
                <td></td>
                <td>
                  <Link to="/">
                    Amazon Prime Music
                    <br />
                    <span>
                      100 million songs, ad-free
                      <br />
                      Over 15 million podcast episodes
                    </span>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footer-bottom-2">
          <div className="footer-bottom-content">
            <div className="footer-bottom-content-end">
              <ul>
                <li>
                  <Link to="/">Conditions of Use & Sale</Link>
                </li>
                <li>
                  <Link to="/">Privacy Notice</Link>
                </li>
                <li>
                  <Link to="/">Interest-Based Ads</Link>
                </li>
              </ul>
              <span>© 1996-2021, Amazon.com, Inc. or its affiliates</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterBottom;
