import React, { Component } from 'react';
import './Home.scss';
import Header from '../../components/Header/Index';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Images from '../../containers/Images/Image';
import Responsive from '../../Responsive/Responsive.css';
import HomeCategory from '../../components/HomeCategory/Index';
import Footer from '../../components/Footer/Index';
import { Link } from 'react-router-dom';
import CarouselPage from '../../components/Carousel/Index';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


class Home extends Component {
    public state: any;
    public setState: any;
    public handleInputChange: any;

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            country: '',
            region: '',
            showCountry: true,
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
                                    <a href=''><button className='search-rent-btn'>
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
                <section className='homeCateg-bgd '>
                    <Container>
                        <Row>
                            <Col lg={12}> <CarouselPage /></Col>
                        </Row>
                    </Container>
                </section>
               
                
                <section className='desc-bgd-color mt60 mb60'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                <div className='rent-desc-container'>
                                    <div className='desc-text'>
                                        <h4 className='better-txt-style'>Rent & Lease Hassle-free</h4>
                                        <h5 className='sub-better-txt'>We provide you full service at every step,and get better results for Lower fees</h5>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                            <Row className="mt40">
                                <Col lg={4} >
                                   <div className='better-container mb20'>
                                        <div className='Img-container'>
                                            <img className='box-Img2-style' src={Images.path.centralWhite} />
                                        </div>
                                        <div className='box-utility'>
                                            <h5 className='utility-title'>No central Authority</h5>
                                            <p className='util-content'>With the implementation of blockchain,Rental DAap offers Decentralised which means no central authority has control over your  data, nor you will be chargedadditional middlemen charges on your transaction.</p>
                                        </div>
                                    </div>  
                                </Col>
                                <Col lg={4}>
                                    <div className='better-container mb20'>
                                        <div className='Img-container'>
                                            <img className='box-Img2-style' src={Images.path.centralWhite} />
                                        </div>
                                        <div className='box-utility'>
                                            <h5 className='utility-title'>No central Authority</h5>
                                            <p className='util-content'>With the implementation of blockchain,Rental DAap offers Decentralised which means no central authority has control over your  data, nor you will be chargedadditional middlemen charges on your transaction.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className='better-container mb20'>
                                        <div className='Img-container'>
                                            <img className='box-Img3-style' src={Images.path.rentWhite} />
                                        </div>
                                        <div className='box-utility'>
                                            <h5 className='utility-title'>  Rent & Book Anything</h5>
                                            <p className='util-content'>Rental DAap has been powered on Smart Contract to offer a predefined set of rules ,meansyou can Rent,Book,List from A to Z using Era Swap Utility, on a single decentralised platform.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
              </section>
                
                <section className='homeCateg-bgd'>
                    <Container className='pdt40 pdb40'>
                       <HomeCategory />
                    </Container>
                </section>


              
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