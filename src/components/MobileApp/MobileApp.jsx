import React, { Component } from 'react';
import "./MobileApp.css"
const tell = require("./img/iphone.png")
const APS = require("./img/AppStore.png")
const PL = require("./img/Play.png")



export class MobileApp extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="container">
                        <div className="row">

                            <div className="MobileApp">
                                <div className="col-6">
                                    <div className="images">
                                        <img src={tell} alt="png" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="BigText"><span>Download</span></div>
                                    <div className="bigText2"><span>mobile App</span></div>
                                    <div className="SmalText"><span>Download Trip</span>  ay mobile banking.</div>
                                    <div className="SmalText1"><span>app for IOS an</span> d android.It helps you</div>
                                    <div className="SmalText2">y and more smartly.</div>

                                    <div className="Line">
                                        <div className="APS">
                                            <img src={APS} alt="png" />
                                            <p className="SmallText">App Store</p>
                                        </div>
                                    </div>

                                    <div className="Line1">
                                        <div className="PL">
                                            <img src={PL} alt="png" />
                                            <p className="SmallText1">Play Store</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}


