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
                        <Col  sm={3}>
                        <img className='rentDaap-Img'  src={Images.path.rentingdapp} />
                        </Col>
                        <Col  sm={3}>
                            <div className='footer-link'>
                               Link
                                </div>
                                <div className='rentDaap-help'>
                                    <ul>
                                        <li>User Guide on how to Post</li>
                                        <li>About Eraswap Life</li>
                                        <li>Code of Conduct</li>
                                        <h5 className='other-footer-txt'>Other Links</h5>
                                        <li>Whitepaper</li>
                                        <li>Contact Us</li>
                                        <li>Terms & Condition</li>
                                        <li>Privacy policy</li>
                                    </ul>
                                    </div>
                        </Col>
                        <Col  sm={6}>
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