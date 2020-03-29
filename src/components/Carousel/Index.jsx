import React, { Component } from 'react';
import './Carousel.scss';
import Images from '../../containers/Images/Image';
import { Col, Container, Row } from 'react-bootstrap';
import Responsive from '../../Responsive/Responsive.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



class CarouselPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    render() {
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          };

        return (
            <div className='slider-item-main'>
                <Container>
                <Carousel responsive={responsive}>
                <div className='card text-center'>
                                <div className='overflow'>
                                     <img className='car-slider-img' src={Images.path.itemOne}/>
                                    </div>
                                 <div className='card-body text-dark'>
                                 <h5 className='card-title'>Kitchen Modular gfgdgdgdg gdfgd</h5>
                               <h6 className='card-rent-text'>Rent</h6>
                                 <p>ES 599/month</p>
                                <a href='#' className='btn btn-outline'> View</a>
                            </div>
                            </div>
    
                            <div className='card text-center'>
                                <div className='overflow'>
                                     <img className='car-slider-img' src={Images.path.itemOne}/>
                                    </div>
                                 <div className='card-body text-dark'>
                                 <h5 className='card-title'>Kitchen Modular</h5>
                                 <h6 className='card-rent-text'>Rent</h6>
                                 <p>ES 599/month</p>
                                <a href='#' className='btn btn-outline'> View</a>
                            </div>
                            </div>
                       
                            <div className='card text-center'>
                                <div className='overflow'>
                                     <img className='car-slider-img' src={Images.path.itemOne}/>
                                    </div>
                                 <div className='card-body text-dark'>
                                 <h5 className='card-title'>Kitchen Modular</h5>
                                 <h6 className='card-rent-text'>Rent</h6>
                                 <p>ES 599/month</p>
                                <a href='#' className='btn btn-outline'> View</a>
                            </div>
                            </div>
                       
                            <div className='card text-center'>
                                <div className='overflow'>
                                     <img className='car-slider-img' src={Images.path.itemOne}/>
                                    </div>
                                 <div className='card-body text-dark'>
                                 <h5 className='card-title'>Kitchen Modular</h5>
                               <h6 className='card-rent-text'>Rent</h6>
                                 <p>ES 599/month</p>
                                <a href='#' className='btn btn-outline'> View</a>
                            </div>
                            </div>
                            <div className='card text-center'>
                                <div className='overflow'>
                                     <img className='car-slider-img' src={Images.path.itemOne}/>
                                    </div>
                                 <div className='card-body text-dark'>
                                 <h5 className='card-title'>Kitchen Modular</h5>
                               <h6 className='card-rent-text'>Rent</h6>
                                 <p>ES 599/month</p>
                                <a href='#' className='btn btn-outline'> View</a>
                            </div>
                            </div>
                            <div className='card text-center'>
                                <div className='overflow'>
                                     <img className='car-slider-img' src={Images.path.itemOne}/>
                                    </div>
                                 <div className='card-body text-dark'>
                                 <h5 className='card-title'>Kitchen Modular</h5>
                               <h6 className='card-rent-text'>Rent</h6>
                                 <p>ES 599/month</p>
                                <a href='#' className='btn btn-outline'> View</a>
                            </div>
                            </div>
                    </Carousel>
                </Container>
            </div>
        );
    }
}




export default CarouselPage ;