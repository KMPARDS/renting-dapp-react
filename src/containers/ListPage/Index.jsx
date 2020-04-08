import React, { Component } from 'react';
import './ListPage.scss';
import Images from '../../containers/Images/Image';
import Responsive from '../../Responsive/Responsive.css';
import { Col, Container, Row } from 'react-bootstrap';


class ListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        return (
            <div>
                        <div className='r-col-d-4'>
                            <div className='card-category-container'>
                                <div className='overflow'>
                                    <img className='catg-imgs' src={Images.path.itemOne} />
                                </div>
                                <div className='catg-body-txt'>
                                    <p>ES 599/month</p>
                                    <div className='catg-rating'><img className='rate-imgs' src={Images.path.orangeStar} />4.5</div>
                                </div>
                                <p className='location-catg'>Location</p>
                            </div>
                        </div>
                        <div className='r-col-d-4 '>
                            <div className='card-category-container'>
                                <div className='overflow'>
                                    <img className='catg-imgs' src={Images.path.itemOne} />
                                </div>
                                <div className='catg-body-txt'>
                                    <p>ES 599/month</p>
                                    <div className='catg-rating'><img className='rate-imgs' src={Images.path.orangeStar} />4.5</div>
                                </div>
                                <p className='location-catg'>Location</p>
                            </div>
                        </div>
                        <div className='r-col-d-4 '>
                            <div className='card-category-container'>
                                <div className='overflow'>
                                    <img className='catg-imgs' src={Images.path.itemOne} />
                                </div>
                                <div className='catg-body-txt'>
                                    <p>ES 599/month</p>
                                    <div className='catg-rating'><img className='rate-imgs' src={Images.path.orangeStar} />4.5</div>
                                </div>
                                <p className='location-catg'>Location</p>
                            </div>
                        </div>
                        <div className='r-col-d-4 '>
                            <div className='card-category-container'>
                                <div className='overflow'>
                                    <img className='catg-imgs' src={Images.path.itemOne} />
                                </div>
                                <div className='catg-body-txt'>
                                    <p>ES 599/month</p>
                                    <div className='catg-rating'><img className='rate-imgs' src={Images.path.orangeStar} />4.5</div>
                                </div>
                                <p className='location-catg'>Location</p>
                            </div>
                        </div>
                        <div className='r-col-d-4 '>
                            <div className='card-category-container'>
                                <div className='overflow'>
                                    <img className='catg-imgs' src={Images.path.itemOne} />
                                </div>
                                <div className='catg-body-txt'>
                                    <p>ES 599/month</p>
                                    <div className='catg-rating'><img className='rate-imgs' src={Images.path.orangeStar} />4.5</div>
                                </div>
                                <p className='location-catg'>Location</p>
                            </div>
                        </div>
                        <div className='r-col-d-4 '>
                            <div className='card-category-container'>
                                <div className='overflow'>
                                    <img className='catg-imgs' src={Images.path.itemOne} />
                                </div>
                                <div className='catg-body-txt'>
                                    <p>ES 599/month</p>
                                    <div className='catg-rating'><img className='rate-imgs' src={Images.path.orangeStar} />4.5</div>
                                </div>
                                <p className='location-catg'>Location</p>
                            </div>
                        </div>
                    </div>
        );
    }
}




export default ListPage;