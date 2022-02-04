import React from "react";
import Logo from "../Images/logo.png"
import "./style.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.esm"


const Header = () => {
    return (

<nav className="navbar navbar-expand-md navbar-light myNav p-0 m-0 ">
  <div className="container-fluid" >
    <img className="navbar-brand p-0 myLogo" src={Logo} width={150}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center w-50 p-0 m-0 " id="navbarNav">
      <ul className="navbar-nav my-ul w-50 justify-content-evenly" >
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Header;