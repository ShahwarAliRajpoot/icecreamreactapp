import React from "react";
import "./style.css";

const Footer = () => {

    return (

     <div className="footerBox">

         <div className="f1">
         <i className="fas fa-ice-cream myIcon"></i>
           <a href="#">PRODUCT</a>
         </div>

         <div className="f2">
         <i class="fas fa-hands myIcon"></i>
         <a href="#">OUR STORY</a>
         </div>

         <div className="f3">
         <i class="fas fa-tint myIcon"></i>
          <a href="#">FLAVORS</a>
         </div>

         <div className="f4">
         <i class="fas fa-map-marker-alt myIcon"></i>
          <a href="#">OUR LOCATIN</a>
         </div>

     </div>

    )

}

export default Footer