import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.esm";
import Img from "../Images/mango.png";
import "./style.css";

const Content = () => {
  return (
    <div className="contentBox">
      <div className="col-5">
        <h4> NEW PRODUCT </h4>
        <h1>The Twist of Healthy Yogurt</h1>
        <p>
          Ice cream is a sweetened frozen food typically eaten as a snack or
          dessert. It may be made from milk or cream and is flavoured with a
          sweetener, either sugar or an alternative,
        </p>
      </div>

      <div className="col-4">
        <img className="img-fluid" src={Img} />
      </div>
    </div>
  );
};

export default Content