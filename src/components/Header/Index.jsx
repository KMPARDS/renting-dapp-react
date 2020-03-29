import React, { Component } from 'react';
import './Header.scss';
import NavMenu from '../NavMenu/Index';
import Images from '../../containers/Images/Image';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu:false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu = () => {
        this.setState({showMenu: !this.state.showMenu})
    }

    render() {
        return (
            <div className='header-container'>
                <div className='header-logo'> <img className='rentDaap-Img'  src={Images.path.rentingdapp} /></div>
                <nav className='header-menu'>
                    <a className='category-text' href='#'>Home</a>
                    <a className='category-text' onClick={this.toggleMenu}>All Categories</a>
                    {
                        this.state.showMenu
                            ? (
                                <NavMenu/>
                            )
                            : (
                                null
                            )
                    }
                </nav>
                <div className='contact-section'>
                    <div className='contact-icons'>
                    <img className='chat-img'  src={Images.path.Chatwhite} />
                    <img className='notif-img'  src={Images.path.Nortificationwhite} />
                    <img className='profile-img'  src={Images.path.profilewhite} />
                    <img className='profile-img'  src={Images.path.Cart} />
                    </div>
                <div className='rent-btn'><a href='#'>Rent</a></div>
                </div>
            </div>
        );
    }
}




export default Header;