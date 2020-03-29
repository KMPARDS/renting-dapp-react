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
            <nav>
                 <div className='rentDaap-header-logo'> 
                 <img className='rentDaap-Img'  src={Images.path.rentingdapp} />
                 </div>
                 <ul>
                     <li><a href=''>Home</a></li>
                     <li><a href=''>All Categories</a></li>
                     <li><a href=''><img className='chat-img'  src={Images.path.Chatwhite} /></a></li>
                     <li><a href=''> <img className='notif-img'  src={Images.path.Nortificationwhite} /></a></li>
                     <li><a href=''> <img className='profile-img'  src={Images.path.profilewhite} /></a></li>
                     <li><a href=''> <img className='profile-img'  src={Images.path.Cart} /></a></li>
                     <li><a href=''>Rent</a></li>
                     </ul>
                </nav>
        );
    }
}




export default Header;