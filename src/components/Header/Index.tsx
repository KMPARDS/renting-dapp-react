import React, { Component } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/Index";
import Images from "../../containers/Images/Image";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Input,
  Button,
  ButtonGroup,
} from "reactstrap";

class Header extends Component {

  constructor(props: Readonly<{}>) {
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
      showMenu: !this.state.showMenu,
    });
  };

  toggleProfile = () => {
    this.setState({
      profileMenu: !this.state.profileMenu,
    });
  };

  toggle = () => {
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
            {/* <li className="nav-item dropdown has-megamenu">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"> ALL CATEGORIES  </a>
                      <div className="dropdown-menu megamenu" role="menu">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="col-megamenu">
                                              <h6 className="title">Title Menu One</h6>
                                              <ul className="list-unstyled megamenu-box">
                                                  <li><a href="#">Custom Menu</a></li>
                                                  <li><a href="#">Custom Menu</a></li>
                                                  <li><a href="#">Custom Menu</a></li>
                                                  <li><a href="#">Custom Menu</a></li>
                                                  <li><a href="#">Custom Menu</a></li>
                                                  <li><a href="#">Custom Menu</a></li>
                                              </ul>
                                            </div>  
                                        </div>
                                        <div className="col-md-3">
                                          <div className="col-megamenu">
                                            <h6 className="title">Title Menu Two</h6>
                                                <ul className="list-unstyled megamenu-box">
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                </ul>
                                            </div>  
                                        </div>
                                        <div className="col-md-3">
                                          <div className="col-megamenu">
                                            <h6 className="title">Title Menu Three</h6>
                                                <ul className="list-unstyled megamenu-box">
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                </ul>
                                            </div>  
                                        </div>    
                                        <div className="col-md-3">
                                          <div className="col-megamenu">
                                            <h6 className="title">Title Menu Four</h6>
                                                <ul className="list-unstyled megamenu-box">
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                    <li><a href="#">Custom Menu</a></li>
                                                </ul>
                                            </div>  
                                        </div>
                                    </div>
                        </div> 
                  </li> */}
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              {" "}
              <a className="nav-link" href="/#">
                Home{" "}
              </a>{" "}
            </li>
            <li className="nav-item ">
              {" "}
              <a className="nav-link catgry-texttwo" onClick={this.toggleMenu}>
                All Categories{" "}
              </a>{" "}
            </li>
            <li className="nav-item ">
              {" "}
              <a className="nav-link catgry-texttwo" href="/List">
                {" "}
                Product list{" "}
              </a>{" "}
            </li>
            <li className="nav-item ">
              {" "}
              <a className="nav-link catgry-texttwo" href="/MyListing">
                {" "}
                My Listings{" "}
              </a>{" "}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                <i className="fa fa-comment-o" aria-hidden="true"></i>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                <i className="fa fa-bell-o" aria-hidden="true"></i>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/MyAccount">
                {" "}
                <i className="fa fa-user-o" aria-hidden="true"></i>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/myFav">
                {" "}
                <i className="fa fa-heart" aria-hidden="true"></i>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-outline-warning conn-wallet-btn"
                href="/RentPage"
              >
                {" "}
                Rent{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-outline-warning conn-wallet-btn"
                href="https://eraswap.life/"
                target="_blank"
              >
                {" "}
                CONNECT TO WALLET{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
