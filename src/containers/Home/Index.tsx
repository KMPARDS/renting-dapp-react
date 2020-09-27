import React, { Component } from 'react';
import './Home.scss';
import Header from '../../components/Header/Index';
import { Card, Button, Container, Row, Form, InputGroup, Col, FormControl } from 'react-bootstrap';
import Images from '../../containers/Images/Image';
import Responsive from '../../Responsive/Responsive.css';
import HomeCategory from '../../components/HomeCategory/Index';
import Footer from '../../components/Footer/Index';
import { Link } from 'react-router-dom';
import CarouselPage  from '../../components/Carousel/Index';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
const queryString = require("query-string");

class Home extends Component {
	public state: any;
	public handleInputChange: any;

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            country: '',
            region: '',
            showCountry: true,
            currentCategory: 0,
            currentSubCategory: 0,
            categoryArr: [
                {
                  id: 1,
                  cat: "Real Estate",
                  sub: [
                    "For Sale Houses & Appartments",
                    "For Rent Houses & Appartments",
                    "Lands & Plots",
                    "Shops & Offices",
                    "PG 7 Guests",
                    "For Sale Houses & Appartments",
                  ],
                },
                {
                  id: 2,
                  cat: "Vehicle",
                  sub: ["Cars", "Commercial Vehicles", "Spare Parts", "Other Vehicles"],
                },
                {
                  id: 3,
                  cat: "Electronics & Appliances",
                  sub: [
                    "TV-Video-Audio",
                    "Kitchen & Other Appliances",
                    "Computers & Laptops",
                    "Cameras & Lenses",
                    "Games & Entertainment",
                    "Fridges",
                    "Computer Accessories",
                    "Hard Disks,Printers & Monitors",
                    "Acs",
                  ],
                },
                {
                  id: 4,
                  cat: "Mobiles",
                  sub: [
                    "Smart Phones: Android",
                    "Smart Phones: iPhone",
                    "Camera Phones",
                    "Music Phones",
                    "Feature Phones",
                  ],
                },
                {
                  id: 5,
                  cat: "Furniture",
                  sub: [
                    "Sofa",
                    "Tables",
                    "Chairs/ Stools/ Benches",
                    "Beds",
                    "Bean Bags",
                    "Cupboard/ Cabinet/ Wardrobe",
                    "TV Unit",
                    "Shoe Rack",
                    "Others",
                  ],
                },
                {
                  id: 6,
                  cat: "Bikes",
                  sub: [
                    "Standard",
                    "Sport Bike",
                    "Touring Bike",
                    "Scooters, underbones and mopeds",
                    "Offroad Bike",
                    "Others",
                  ],
                },
              ],
        };
    }
    
    selectCountry (val: any) {
        this.setState({ country: val ,showCountry:false});
      }
     
    selectRegion (val: any) {
        this.setState({ region: val });
    }


    render() {
        return (
            <div>
                <div className='rental-hero-bgd'>
                    <div className='wrapper-container'>
                        <Header />
                        <div className='buy-main-container'>
                            <h4 className='hero-txt-style'>Rent & Lease anything Peer to Peer </h4>
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
                                <Form>
                                    <Form.Row className="align-items-center">
                                        <Col xs="{auto}" className="my-1">
                                            <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                                Preference
                                            </Form.Label>
                                            <Form.Control
                                                as="select"
                                                className="mr-sm-2 search-field"
                                                id="inlineFormCustomSelect"
                                                onChange={(e) => {this.setState({currentCategory: e.target.value})}}
                                                custom
                                            >
                                                <option value={0}>Real Estate</option>
                                                <option value={1}>Vehicle</option>
                                                <option value={2}>Electronics & Appliances</option>
                                                <option value={3}>Mobiles</option>
                                                <option value={4}>Furniture</option>
                                                <option value={5}>Bikes</option>
                                            </Form.Control>
                                        </Col>

                                        <Col xs="{auto}" className="my-1">
                                            <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" onChange={this.handleInputChange}  srOnly>
                                                Preference
                                            </Form.Label>
                                            <Form.Control
                                                as="select"
                                                className="mr-sm-2 search-field"
                                                id="inlineFormCustomSelect"
                                                onChange={(e) => {this.setState({currentSubCategory: e.target.value})}}
                                                custom
                                            >
                                                {
                                                    this.state.categoryArr[this.state.currentCategory].sub.map((item: React.ReactNode, i: string | number | readonly string[] | undefined) => (
                                                        <option value={i}> {item} </option>
                                                    ))
                                                }

                                            </Form.Control>
                                        </Col>  

                                        <Col xs="auto" className="my-1">
                                            <button className="search-rent-btn position-relative">
                                                <Link 
                                                    to={`/search?${queryString.stringify({
                                                    category: this.state.categoryArr[this.state.currentCategory].cat,                                               
                                                    id: '' + this.state.categoryArr[this.state.currentCategory].id + '_' + this.state.currentSubCategory
                                                    })}`}
                                                    className="search-rent-btn stretched-link"
                                                >
                                                    Search Now
                                                </Link>
                                            </button>
                                        </Col>
                                    </Form.Row>
                                </Form>
                                {/*<div className='search-btn-container'>
                                    <a href=''>
                                        <button  className='search-rent-btn'>
                                            Search Now 
                                        </button> 
                                    </a>
                                </div>*/}
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