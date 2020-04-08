import React, { Component } from 'react';
import './MyListing.scss';
import Images from '../Images/Image';
import Responsive from '../../Responsive/Responsive.css';
import NavBar from '../../components/Header/NavBar';
import Footer from '../../components/Footer/Index';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class MyListing extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        return (
            <div>
                <NavBar />
                <div className='myListing-wrapper-container'>
                
                        <div className='row listing-border'>
                     <div className='r-col-d-4'>
                        <div className='section1-listing'>
                            <img className='listing-main-img' src={Images.path.rlTwo} />
                            <img className='listing-small-img' src={Images.path.rlTwo} />
                            <img className='listing-small-img' src={Images.path.rlTwo} />
                            <img className='listing-small-img' src={Images.path.rlTwo} />
                        </div>
                        </div>
                        <div className='r-col-d-8'>
                        <div className='section2-listing'>
                            <h5 className='listing-head'> casa de rio Mountain</h5>
                            <div className='myList-amount'>200ES/day</div>
                            <h5 className='desc-head'>Description</h5>
                            <p className='desc-para'>hsuffdsssgsgsfgsfgsgsgsgggg</p>
                            <div className='two-btn-container'>
                                <button className='listing-edit'>Edit</button>
                                <button className='listing-delete'>Delete</button>
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




export default MyListing;