import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu/Index';
import Images from '../../containers/Images/Image';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu:false,
            profileMenu:false,
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
    
    render() {
        return (
            <nav className='header-nav-flex'>
                 <div className='rentDaap-header-logo'> 
                 <img className='rentDaap-Img'  src={Images.path.logocolor} />
                 </div>
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
                     <li><Link to='/myChat'><img className='chat-img'  src={Images.path.Chatwhite} /></Link></li>
                     <li><Link to=''> <img className='notif-img'  src={Images.path.Nortificationwhite} /></Link></li>
                     <li><Link to='' onClick={this.toggleProfile}> <img className='profile-img'  src={Images.path.profilewhite} /></Link></li>
                     {
                         this.state.profileMenu ?
                         (<div className='profile-dropdown'>
                                 
                                 <Link to='/MyListing'> <div className='drp-txt-profile'>My Listing</div></Link>
                                 <Link to='/form'> <div className='drp-txt-profile'>Logout</div></Link>
                                 
                         </div>) :''
                     }
                     <li><Link to='/myCart'> <img className='profile-img'  src={Images.path.Cart} /></Link></li>
                     <li><Link to='/RentList'>Rent</Link></li>
                     </ul>
                </nav>
        );
    }
}




export default Header;