import React, { Component } from 'react';
import './Home.scss';
import Header from '../../components/Header/Index';
import { Card, Button, Container, Row } from 'react-bootstrap';
import Images from '../../containers/Images/Image';
import Responsive from '../../Responsive/Responsive.css';
import HomeCategory from '../../components/HomeCategory/Index';
import Footer from '../../components/Footer/Index';
import { Link } from 'react-router-dom';
import CarouselPage  from '../../components/Carousel/Index';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


class Home extends Component {
	public state: any;
	public setState: any;
	public handleInputChange: any;

    constructor(props) {
        super(props);
        this.state = {
            country: '',
            region: '',
            showCountry: true,
        };
    }
    
    selectCountry (val) {
        this.setState({ country: val ,showCountry:false});
      }
     
      selectRegion (val) {
        this.setState({ region: val });
      }


    render() {
        return (
            <div>
                <div className='rental-hero-bgd'>
                    <div className='wrapper-container'>
                        <Header />
                        <div className='buy-main-container'><h4 className='hero-txt-style'>Rent & Lease anything Peer to Peer </h4>
                            <div className='main-rent-search'>
                            {/* <div className='location-dropdown'>
                                {this.state.showCountry ?(<CountryDropdown
                                   className='country-style'
                                        value={this.state.country}
                                        onChange={(val) => this.selectCountry(val)} />)
                                        : <RegionDropdown
                                       className='region-style'
                                        country={this.state.country}
                                        value={this.state.region}
                                        onChange={(val) => this.selectRegion(val)} />}
                                        </div> */}
                                <form>
                                    <input
                                        placeholder='Search for anything here'
                                        className='search-field'
                                        onChange={this.handleInputChange}
                                    />
                                </form>
                                <div className='search-btn-container'>
                                 <a href=''><button  className='search-rent-btn'>
                                       Search Now 
                                    </button> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='recommn-bgd'>
                    <div className='wrapper-container'>
                        <div className='recommn-txt-style container'>
                            Recommendations For You.
                   </div>
                    </div>
                </div>
                <div className='homeCateg-bgd'>
                    <div className='wrapper-container'>
                        <CarouselPage />
                    </div>
                </div>
                <div className='desc-bgd-color'>
                <div className='wrapper-container'>
                    <div className='rent-desc-container'>
                        <div className='desc-text'>
                            <h4 className='better-txt-style'>Rent & Lease Hassle-free</h4>
                            <h5 className='sub-better-txt'>We provide you full service at every step,and get better results for Lower fees</h5>
                        </div>
                    </div>
                    <div className='rent-main-container'>
                        <div className='rent-details'>
                            <div className='r-col-d-3'>
                                <div className='better-container'>
                                    <div className='Img-container'>
                                        <img className='box-Img-style' src={Images.path.transWhite} />
                                    </div>
                                    <div className='box-utility'>
                                        <h5 className='utility-title'>Era Swap Utility</h5>
                                        <p className='util-content'>On rental DApp you can rent and Transact using ES Utility efficiently.ES utility offers cheaper transaction,costs,transparency,and much faster and better transactions on a secured blockchain network</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='rent-details'>
                            <div className='r-col-d-3'>
                                <div className='better-container'>
                                    <div className='Img-container'>
                                        <img className='box-Img2-style' src={Images.path.centralWhite} />
                                    </div>
                                    <div className='box-utility'>
                                        <h5 className='utility-title'>No central Authority</h5>
                                        <p className='util-content'>With the implementation of blockchain,Rental DAap offers Decentralised which means no central authority has control over your  data, nor you will be chargedadditional middlemen charges on your transaction.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='rent-details'>
                            <div className='r-col-d-3'>
                                <div className='better-container'>
                                    <div className='Img-container'>
                                        <img className='box-Img3-style' src={Images.path.rentWhite} />
                                    </div>
                                    <div className='box-utility'>
                                        <h5 className='utility-title'>  Rent & Book Anything</h5>
                                        <p className='util-content'>Rental DAap has been powered on Smart Contract to offer a predefined set of rules ,meansyou can Rent,Book,List from A to Z using Era Swap Utility, on a single decentralised platform.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='homeCateg-bgd'>
                    <div className='wrapper-container'>
                        <HomeCategory />
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


export default Home;