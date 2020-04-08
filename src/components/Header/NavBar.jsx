import React, { Component } from 'react';
import './NavBar.scss';
import NavMenu from '../NavMenu/Index';
import Images from '../../containers/Images/Image';
import { Link } from 'react-router-dom';



class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu })
    }

    render() {
        return (
            <div className='navbarborder-style'>
                <div className='wrapper-container'>
                    <div className='header-container'>
                        <div className='header-logo'> <img className='rentDaap-Img' src={Images.path.logocolor} /></div>
                        <div className='header-menu'>
                                <a class="nav-link nav-link-ltr" href="/">Home</a>
                                <a class="nav-link nav-link-ltr" href="#" onClick={this.toggleMenu}>All Categories</a>
                                {
                                this.state.showMenu
                                    ? (
                                        <NavMenu />
                                    )
                                    : (
                                        null
                                    )
                            }
    
                        </div>
                        <div className='contact-section'>
                            <div className='contact-icons'>
                            <Link to='/myChat'> <img className='chat-img' src={Images.path.ChatGrey} /></Link>
                            <Link to='/myCart'>  <img className='notif-img' src={Images.path.Notifactiongrey} /> </Link>
                            <Link to='/myCart'>  <img className='profile-img' src={Images.path.Prfilegrey} /></Link>
                                <Link to='/myCart'> <img className='profile-img' src={Images.path.cartgrey} /></Link>
                            </div>
                            <div className='rent-btn'><a href='/RentList'>Rent</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;