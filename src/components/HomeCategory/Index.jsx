import React, { Component } from 'react';
import './HomeCategory.scss';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Images from '../../containers/Images/Image';
import Responsive from '../../Responsive/Responsive.css';
import { Link } from 'react-router-dom';


class HomeCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div className='top-category-headin'>
                    <h5 className='top-categ-head'>Top Categories</h5>
                    <p>We provide full service at every step, and get better results for lower fees</p>
                </div>
                <Container className='category-container'>
                    <div className='section-one-category'>
                        <div className='row'>
                            <Col sm={8} >
                                <div className='category-one-box'>
                                <div className='hover-category'> Real Estate</div>
                                    <img className='box-Img-one' src={Images.path.realEstate} />
                                  <Link to='/allCategory'>  <div className='rentCategory-text'>
                                        Real Estate
                                    </div> </Link>
                                </div></Col>
                            <Col sm={4}>
                                <div className='category-two-box'>
                                <div className='hover-category'> Vehicles</div>
                                    <img className='box-Img-two' src={Images.path.Vehicle} />
                                    <div className='rentCategory-text'>
                                        Vehicles
                                    </div>
                                </div></Col>
                        </div>
                    </div>
                    <div className='section-two-category'>
                        <div className='row'>
                            <Col>
                                    <div className='category-three-box'>
                                    <div className='hover-category'> Furnitures</div>
                                        <img className='box-Img-three' src={Images.path.furniture} />
                                        <div className='rentCategory-text'>
                                            Furnitures
                                    </div>
                                    </div></Col>
                                <Col><div className='category-three-box'>
                                <div className='hover-category'> Mobiles</div>
                                    <img className='box-Img-three' src={Images.path.mobile} />
                                    <div className='rentCategory-text'>
                                        Mobiles
                                    </div>
                                </div></Col>
                                <Col><div className='category-three-box'>
                                <div className='hover-category'>Bikes</div>
                                    <img className='box-Img-three' src={Images.path.bike} />
                                    <div className='rentCategory-text'>
                                        Bikes
                                    </div>
                                </div></Col>
                    </div>
                        </div>
                </Container>
            </div>
        );
    }
}


export default HomeCategory;