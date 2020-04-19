import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu/Index';
import Images from '../../containers/Images/Image';
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
    ButtonGroup
  } from 'reactstrap';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu:false,
            profileMenu:false,
            isOpen: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleProfile = this.toggleProfile.bind(this);
    }

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu,
        })
    }

    toggleProfile = () => {
        this.setState({
            profileMenu:!this.state.profileMenu
        })
    }

    toggle =() => {
        this.setState({ isOpen: !this.state.isOpen });
      }
    
    render() {
        return (
            <Navbar color='transparent' light expand='md'>
            <nav className='header-nav-flex'>
            <NavbarBrand href='/' className='rentDaap-header-logo'> 
                 <img className='rentDaap-Img'  src={Images.path.logocolor} />
                 </NavbarBrand>
                 <NavbarToggler onClick={this.toggle} />
                 <Collapse isOpen={this.state.isOpen} navbar>
                 <ul className='header-listItem'>
                     <li ><a className='catgry-text' href=''>Home</a></li>
                     <li className='catgry-texttwo' ><a  onClick={this.toggleMenu}>All Categories</a></li>
                     {
                        this.state.showMenu
                            ? (
                                <NavMenu/>
                            )
                            : (
                                null
                            )
                    }
                     <li><Link to='/ComingSoon'><img className='chat-img'  src={Images.path.Chatwhite} /></Link></li>
                     <li><Link to=''> <img className='notif-img'  src={Images.path.Nortificationwhite} /></Link></li>
                     <li><Link to='' onClick={this.toggleProfile}> <img className='profile-img'  src={Images.path.profilewhite} /></Link></li>
                     {
                         this.state.profileMenu ?
                         (<div className='profile-dropdown'>
                                 
                                 <Link to='/MyListing'> <div className='drp-txt-profile'>My Listing</div></Link>
                           <div className='drp-txt-profile'>Logout</div>
                                 
                         </div>) :''
                     }
                     <li><Link to='/ComingSoon'> <img className='profile-img'  src={Images.path.Cart} /></Link></li>
                     <li><Link to='/ComingSoon'>Rent</Link></li>
                     </ul>
                     </Collapse>
                </nav>
                </Navbar>
        );
    }
}




export default Header;