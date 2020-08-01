import React, { Component } from "react";
import "./NavBar.scss";
import NavMenu from "../NavMenu/Index";
import Images from "../../containers/Images/Image";
import { Link } from "react-router-dom";
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

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      isOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="navbarborder-style">
        <div className="wrapper-container">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              <img className="rentDaap-Img" src={Images.path.logocolor} />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" onClick={this.toggleMenu}>
                    All Categories
                  </NavLink>
                </NavItem>
                {this.state.showMenu ? <NavMenu /> : null}

                <NavItem className="small-nav-margin">
                  <Link to="/ComingSoon">
                    {" "}
                    <img className="chat-img" src={Images.path.ChatGrey} />
                  </Link>
                  <Link to="/ComingSoon">
                    {" "}
                    <img
                      className="notif-img"
                      src={Images.path.Notifactiongrey}
                    />{" "}
                  </Link>
                  <Link to="/ComingSoon">
                    Other Links{" "}
                    <img className="profile-img" src={Images.path.Prfilegrey} />
                  </Link>
                  <Link to="/myCart">
                    {" "}
                    <img className="profile-img" src={Images.path.cartgrey} />
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavBar;
