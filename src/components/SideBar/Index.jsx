import React, { Component } from 'react';
import './SideBar.scss';
import Images from '../../containers/Images/Image';
import Responsive from '../../Responsive/Responsive.css';
import { Link , NavLink } from 'react-router-dom';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        };

    }

    handleClick=() =>{
            this.setState({clicked: !this.state.clicked})
    }


    render() {
        var className = !this.state.clicked ? 'subctg-txt' : 'subctg-txt-active';
        return (

              
            <div className='sideBar-container'>
                <div className='category-main'>
                    All Categories
          </div>
                <div className='subcategories'>
                    <ul className='subctg-list'>
                        <li> < NavLink className='subctg-txt'  to='/allCategory'  activeClassName="active" > For Sale:Houses & Appartments(14058)</NavLink></li>
                        <li> < NavLink className='subctg-txt'  to='/allCategory' activeClassName="active" > For Sale:Houses & Appartments(14058)</NavLink></li>
                        <li> < NavLink className='subctg-txt'  to='/allCategory' activeClassName="active" > For Sale:Houses & Appartments(14058)</NavLink></li>
                        <li>< NavLink className='subctg-txt'  to='/allCategory' activeClassName="active" >For Rent:Houses & Appartments(88859)</NavLink></li>
                        <li ><Link className='subctg-txt' to='/allCategory' activeClassName="active">Lands & Plots</Link></li>
                        <li>Shops & Offices</li>
                        <li>PG & Guest Houses(45202)</li>
                    </ul>
                  
                </div>
            </div>
        );
    }
}




export default SideBar;