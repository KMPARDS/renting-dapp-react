import React, { Component } from 'react';
import './NavMenu.scss';


class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render() {
        return (
            <div className='dropdown-category'>
            <div className='allcategory-section'>
           <ul>
               <li className='main-category'>Real Estate</li>
               <li>For Sale:Houses & Appartments</li>
               <li>For Rent:Houses & Appartments</li>
               <li>Lands & Plots</li>
               <li>Shops & Offices</li>
               <li>PG & Guest Houses</li>
           </ul>
           <ul>
               <li className='main-category'>Vehicles</li>
               <li>Cars</li>
               <li>Commercial Vehicles</li>
               <li>Spare parts</li>
               <li>Other Vehicles</li>
           </ul>
           </div>
           <div className='allcategory-section'>
           <ul>
               <li className='main-category'>Electronics & Appliances</li>
               <li>TV-Video-Audio</li>
               <li>Kitchen & Other Appliances</li>
               <li>Computers & Laptops</li>
               <li>Cameras & Lenses</li>
               <li>Games & Entertainment</li>
               <li>Fridges</li>
               <li>Computer Accessories</li>
               <li>Hard Disks,Printers & Monitors</li>
               <li>Acs</li>
               <li>Hard Disks,Printers & Monitors</li>
           </ul>
           <ul>
           <li className='main-category'>Mobiles</li>
               <li>Mobile Phones</li>
               <li>Accessories</li>
               <li>Tablets</li>
           </ul>
           </div>
           <div className='allcategory-section'>
           <ul >
               <li className='main-category'>Furniture</li>
               <li>Sofa & Dining</li>
               <li>Beds & Wardrobe</li>
               <li>Home Decor & Garden</li>
               <li>Kids Furniture</li>
               <li>Other Household items</li>
           </ul>
           <ul>
              <li className='main-category'>Bikes</li>
               <li>Motorcycles</li>
               <li>Scooter</li>
               <li>Spare  Parts</li>
               <li>Bicycles</li>
           </ul>
           </div>
            </div>
        );
    }
}


export default NavMenu;