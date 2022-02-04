import React from "react";
import Banner from "../Images/banner.jpg"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.esm"
import "./style.css"

const MainBanner = () => {
    return (
        <div className="bannerBox">
        <img className="bannerImg img-fluid" src={Banner} />
        </div>
    )
}

export default MainBanner