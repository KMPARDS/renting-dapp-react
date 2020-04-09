import React, { Component } from 'react';
import './RentPage.scss';
import Images from '../../containers/Images/Image';
import Responsive from '../../Responsive/Responsive.css';
import NavBar from '../../components/Header/NavBar';
import Footer from '../../components/Footer/Index';
import { Link } from 'react-router-dom';






class RentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryArr :[
            {
                id:1,
                row1: 'For Sale Houses & Appartments',
                row2: 'For Rent Houses & Appartments',
                row3: 'Lands & Plots',
                row4: 'Shops & Offices',
                row5: 'PG 7 Guests',
                row6: 'For Sale Houses & Appartments',
            },
            {
                id:2,
                row1: 'Cars',
                row2: 'Commercial Vehicles',
                row3: 'Spare Parts',
                row4: 'Other Vehicles',
            },
            {
                id:3,
                row1: 'TV-Video-Audio',
                row2: 'Kitchen & Other Appliances',
                row3: 'Computers & Laptops',
                row4: 'Cameras & Lenses',
                row5: 'Games & Entertainment',
                row6: 'Fridges',
                row7: 'Computer Accessories',
                row8: 'Hard Disks,Printers & Monitors',
                row9: 'Acs',
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
                    <h4>Start Earning Lorem ipsum ipsum</h4>
                    <div className='r-col-d-12'>
                    <table>
                        <tr>
                        <Link to='/form'><th>Select Category</th> </Link>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Real Estate</td>
                            <td>For Sale Houses & Appartments</td>
                        </tr>
                        <tr>
                            <td>Vehicle</td>
                            <td>For Rent Houses & Appartments</td>
                        </tr>
                        <tr>
                            <td>Electronics & Appliances</td>
                            <td>Lands & Plots</td>
                        </tr>
                        <tr>
                            <td>Mobiles</td>
                            <td>Shops & Offices</td>
                        </tr>
                        <tr>
                            <td>Furnitures</td>
                            <td>PG 7 Guests</td>
                        </tr>
                        <tr>
                            <td>Bikes</td>
                            <td>For Sale Houses & Appartments</td>
                        </tr>
                    </table>
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