import React from 'react'
import "./Nav.css"
const Nav = () => {
  return (
    <>
    <nav>
        <div className="container">
            <div className="row justify-content-between mt-4">
                <div className="col-2">
                    <h1 className="logo">Tripay</h1>
                </div>
                <div className="col-5">
                <ul className="list">
                    <li className=" active list_item">Business</li>
                    <li className="list_item">Pricing</li>
                    <li className="list_item">Features</li>
                    <li className="list_item">About</li>
                </ul>
                </div>
                <div className="col-3">
               <div className="box_button"> 
               <a href="#!" className='login'>Log in</a>
                <button className="sign">Sign Up</button>
                </div>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Nav