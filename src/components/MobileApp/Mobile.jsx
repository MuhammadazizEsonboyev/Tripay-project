import React, { Component } from "react";
import "./index.css";
const home = require("./imageMobile/Group 720.png");
const button = require("./imageMobile/Group 727.png");
const stastick = require("./imageMobile/Group 471.png");
const phone = require("./imageMobile/Group 1000001372.png");

export default class Mobile extends Component {
  render() {
    return (
      <>
        <div className="section">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-5">
                <h1 className="how">How it works</h1>
                <p className="work">
                  Mobile banking differs from mobile payments, <br /> which
                  involves the use of a mobile device
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-center text-center ">
              <div className="col-3">
                <img src={home} alt="" className="home" />
                <img src={button} alt="" className="home" />
                <h1 className="information">Information</h1>
                <p className="more">
                  Enter your information <br /> ensure your details <br /> safe
                  and more secure
                </p>
              </div>
              <div className="col-3">
                <img src={stastick} alt="" className="home1" />
                <br />
                <br />
                <h1 className="information">Data Secure</h1>
                <p className="more">
                  Sending money faster & <br /> easier with end to end
                  encryption.
                </p>
              </div>
              <div className="col-3">
                <img src={phone} alt="" className="home2" />
                <h1 className="information1">Add Cards</h1>
                <p className="more1">
                  Add multiple cards and track <br /> your daily expense with quality
                  interface
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
