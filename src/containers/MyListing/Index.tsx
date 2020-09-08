import React, { Component } from 'react';
import './MyListing.scss';
import Images from '../Images/Image';
import Responsive from '../../Responsive/Responsive.css';
import NavBar from '../../components/Header/NavBar';
import Footer from '../../components/Footer/Index';
import Modal from 'react-bootstrap/Modal';
import {  Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class MyListing extends Component {
	public state: any;
	public setState: any;

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            showModal: false
        };

    }

    handleClose = () => {
        this.setState({
            showModal: false,
        })
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
                                    <button onClick={() => this.setState({showModal: true})} className='listing-delete'>Delete</button>
                                </div>
                             </div>
                        </div>
                    </div>

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
                                    <button onClick={() => this.setState({showModal: true})} className='listing-delete'>Delete</button>
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
                 {/* Bootstrap Modal */}
                 <Modal 
                 show={this.state.showModal}
                 onHide={this.handleClose}
                 aria-labelledby="contained-modal-title-vcenter"
                 centered
                 >
                <Modal.Header closeButton>
                <Modal.Title> <div className='rentDaap-header-logo'> 
                 <img className='rentDaap-Img-modal'  src={Images.path.logocolor} />
                 </div></Modal.Title>
                </Modal.Header>
                <Modal.Body> <div className='listing-txt-modal'>Do You want to Delete this listing</div></Modal.Body>
                <Modal.Footer className='delete-footer'>
                <Button variant="secondary" className='delete-btn' onClick={() => this.setState({showModal: false})}>
                  Yes
                </Button>
                <Button variant="primary" className='delete-btn' onClick={() => this.setState({showModal: false})}>
                  No
                </Button>
                </Modal.Footer>
                </Modal>
            </div>
        );
    }
}




export default MyListing;