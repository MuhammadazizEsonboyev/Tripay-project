import './header.css'
import React from 'react'
const grow = require("./immgg/Group.png")
const grown = require("./immgg/Group1.png")
const groer = require("./immgg/Group2.png")
const groerr = require("./immgg/Group3.png")
function Header() {
  return (
    <div className="container">
      <div className="row">
        <div id='nea' className="col-6 ">
          <h1 className='ban'>Banking Should Be Easy.</h1>
          <div className="p">financial transactions without interet using a mobile device such as a smartphone or tablet with bluetooth. </div>
          <button className='get'>Get started</button>
        </div>
        <div id='boxxs' className="col-6">
          <div className="boxxs">
            <div className="fird d-flex">
              <img className='img1' src={grown} alt="" />
              <img className='gre' src={groer} alt="" />
            </div>
            <img className="img3" src={groerr} alt="" />
            <img className='imf' src={grow} alt="" />
            <img className='sdr' src={grown} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;