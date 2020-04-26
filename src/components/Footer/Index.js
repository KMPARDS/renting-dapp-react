import React, { Component } from 'react';
import './Footer.scss';
import Images from '../../containers/Images/Image';
import { Col, Button, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt ,faFacebookSquare} from '@fortawesome/free-solid-svg-icons'


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        return (
            <div className='Footer-container'>
                <Container> 
                    <Row>
                        <Col  sm={4}>
                        <img className='rentDaap-Img'  src={Images.path.rentingdapp} alt='rent' />
                        <div className='social-links'>
                             <img className='social-Img'  src={Images.path.facebook} alt='fb' />
                             <img className='social-Img'  src={Images.path.instagram} alt='inst' />
                             <img className='social-Img'  src={Images.path.twitter} alt='twitter' />
                             <img className='social-Img'  src={Images.path.youtube} alt='yt' />
                        </div>
                        </Col>
                        <Col  sm={3}>
                                <div className='rentDaap-help'>
                                       <ul>
                                       <h5  className='footer-link'> Link</h5>
                                        <li>User Guide on how to Post</li>
                                        <li>About Eraswap Life</li>
                                        <li>Code of Conduct</li>
                                        </ul>
                                        <ul>
                                        <h5 className='other-footer-txt'>Other Links</h5>
                                        <li>Whitepaper</li>
                                        <li>Contact Us</li>
                                        <li>Terms & Condition</li>
                                        <li>Privacy policy</li>
                                        </ul>
                                    </div>
                        </Col>
                        <Col  sm={5}>
                            <div className='subscribe-container'>
                                <div className='subscribe-detail'>Subscribe to Our News Letter</div>
                                <form>
                                    <input
                                        placeholder='Your email address'
                                        className='subscribe-field'
                                        onChange={this.handleInputChange}
                                    />
                                </form>
                                <div className='subscribe-btn-container'>
                                    <button className='subscribe-rent-btn'>
                                       Subscribe
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}




export default Footer;