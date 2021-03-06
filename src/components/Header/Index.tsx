import React, { Component } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/Index";
import Images from "../../containers/Images/Image";



class Header extends Component { 
//@ts-ignore
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      profileMenu: false,
      isOpen: false,
    };
    //this.toggleMenu = this.toggleMenu.bind(this);
    //this.toggleProfile = this.toggleProfile.bind(this);
  }

  toggleMenu = () => {
    this.setState({
      //@ts-ignore
      showMenu: !this.state.showMenu,
    });
  };

  toggleProfile = () => {
    this.setState({
      //@ts-ignore
      profileMenu: !this.state.profileMenu,
    });
  };

  toggle = () => {
    //@ts-ignore
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark  navbar-light bg-transparent black custom-menu ">
        <img className="rentDaap-Img" src={Images.path.logocolor} />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
          </ul>

          <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
              {" "}
              <Link className="nav-link" to="/#">
                Home{" "}
              </Link>{" "}
            </li>

            <li className="nav-item ">
              {" "}
              <Link className="nav-link catgry-texttwo" to="/List">
                {" "}
                Product list{" "}
              </Link>{" "}
            </li>
            <li className="nav-item ">
              {" "}
              <Link className="nav-link catgry-texttwo" to="/MyListing">
                {" "}
                My Listings{" "}
              </Link>{" "}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                {" "}
                <i className="fa fa-comment-o" aria-hidden="true"></i>{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                {" "}
                <i className="fa fa-bell-o" aria-hidden="true"></i>{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/MyAccount">
                {" "}
                <i className="fa fa-user-o" aria-hidden="true"></i>{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/myFav">
                {" "}
                <i className="fa fa-heart" aria-hidden="true"></i>{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn btn-outline-warning conn-wallet-btn"
                to="/RentPage"
              >
                {" "}
                Rent{" "}
              </Link>
            </li>
            <li className="nav-item">
              
              {window.wallet ? (
                <Link
                className="nav-link btn btn-outline-warning conn-wallet-btn"
                to="/#"
                onClick={() => {
                  delete window.wallet;
                }}
              >
                {" "}
                LOGOUT{" "}
              </Link>
              ) : (
                <a
                  className="nav-link btn btn-outline-warning conn-wallet-btn"
                  href="https://eraswap.life/"
                  target="_blank"
                >
                  {" "}
                  CONNECT TO WALLET{" "}
                </a>
              )}
              
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
