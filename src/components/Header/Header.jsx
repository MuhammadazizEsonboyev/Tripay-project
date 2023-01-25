import './header.css'
import React from 'react'
const grow= require("./immgg/Group.png")
const grown= require("./immgg/Group1.png")
const groer= require("./immgg/Group2.png")
const groerr= require("./immgg/Group3.png")

function Header() {
  return (
    <div className="container">
      <div className="row">
        <div id='nea' className="col-5 ">
          <h1 className='ban'>Banking Should
            Be Easy.</h1>
          <div className="p">financial transactions without interet using a mobile device such as a smartphone or tablet with bluetooth. </div>
          <button className='get'>Get started</button>
        </div>
        <div className="col-6">
          <div className="boxxs">
            <img src={grow} alt="" />
            <img src={grown} alt="" />
            <img src={ groer} alt="" />
            <img src={groerr} alt="" />

          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;