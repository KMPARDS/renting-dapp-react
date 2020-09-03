import React, { Component } from 'react';
import './RentPage.scss';
import Images from '../../containers/Images/Image';
//import Responsive from '../../Responsive/Responsive.css';
import NavBar from '../../components/Header/NavBar';
import Footer from '../../components/Footer/Index';
import { Link } from 'react-router-dom';

const queryString = require('query-string');

class RentPage extends Component {
	public state: any;

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            currentCategory: 0,

            categoryArr :[
                {
                    id: 1,
                    cat: 'Real Estate',
                    sub: ['For Sale Houses & Appartments',
                    'For Rent Houses & Appartments',
                    'Lands & Plots',
                    'Shops & Offices',
                    'PG 7 Guests',
                    'For Sale Houses & Appartments',]
                },
                {
                    id:2,
                    cat: 'Vehicle',
                    sub: ['Cars',
                    'Commercial Vehicles',
                    'Spare Parts',
                    'Other Vehicles',]
                },
                {
                    id:3,
                    cat: 'Electronics & Appliances',
                    sub: ['TV-Video-Audio',
                    'Kitchen & Other Appliances',
                    'Computers & Laptops',
                    'Cameras & Lenses',
                    'Games & Entertainment',
                    'Fridges',
                    'Computer Accessories',
                    'Hard Disks,Printers & Monitors',
                    'Acs',]
                },
                {
                    id: 4,
                    cat: 'Mobiles',
                    sub: ['Smart Phones: Android',
                    'Smart Phones: iPhone',
                    'Camera Phones',
                    'Music Phones',
                    'Feature Phones',]
                },
                {
                    id:5,
                    cat: 'Furniture',
                    sub: ['Sofa',
                    'Tables',
                    'Chairs/ Stools/ Benches',
                    'Beds',
                    'Bean Bags',
                    'Cupboard/ Cabinet/ Wardrobe',
                    'TV Unit',
                    'Shoe Rack',
                    'Others',]
                },
                {
                    id:6,
                    cat: 'Bikes',
                    sub: ['Standard',
                    'Sport Bike',
                    'Touring Bike',
                    'Scooters, underbones and mopeds',
                    'Offroad Bike',
                    'Others',]
                },
            ],
        };
    }

    

    render() {
        return (
            <div>
                <NavBar />
                <div className='RentPage-wrapper-container'>
                    <div className='table-category'>
                        <div className='table-catg-details'>

                            <h4><b>List your own products on RentingDApp</b></h4>
                            <div className='r-col-d-12'>
                                <p style={{color: '#E3583C', fontSize: 24}}><b>Select Category</b></p>


                                <div style={{display: "flex"}}>
                                    <div style={{flex: 1}}>
                                        <table style={{width: '100%'}}>
                                            <tr onMouseEnter={()=>{this.setState({currentCategory: 0})}}>
                                                <td>Real Estate</td>
                                            </tr>
                                            <tr onMouseEnter={()=>{this.setState({currentCategory: 1})}}>    
                                                <td>Vehicle</td>
                                            </tr>
                                            <tr onMouseEnter={()=>{this.setState({currentCategory: 2})}}>
                                                <td>Electronics & Appliances</td>
                                            </tr>
                                            <tr onMouseEnter={()=>{this.setState({currentCategory: 3})}}>
                                                <td>Mobiles</td>
                                            </tr>
                                            <tr onMouseEnter={()=>{this.setState({currentCategory: 4})}}>
                                                <td>Furniture</td>
                                            </tr>
                                            <tr onMouseEnter={()=>{this.setState({currentCategory: 5})}}>
                                                <td>Bikes</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div style={{flex: 1}}>
                                        
                                        <table style={{width: '100%'}}>
                                            {this.state.categoryArr[this.state.currentCategory].sub.map(item => (<tr>
                                                <td><Link to ={`/form?${queryString.stringify({category: this.state.categoryArr[this.state.currentCategory].cat, sub: item})}`}>{item}</Link></td>
                                                {/*<td>For Sale Houses & Appartments</td>*/}
                                            </tr>))}
                                        </table>
                                    </div>
                                </div>

                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-bgd'>
                    <div className='wrapper-container'>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}




export default RentPage;