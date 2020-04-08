import React, { Component } from 'react';
import './CategoryDetail.scss';
import Images from '../../containers/Images/Image';
import Responsive from '../../Responsive/Responsive.css';
import NavBar from '../../components/Header/NavBar';
import SideBar from '../../components/SideBar/Index';
import Footer from '../../components/Footer/Index';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';


class CategoryDetail extends Component {
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
            <div>
                <NavBar />
                <div className='row'>
                    <div className='r-col-d-3'>
                        <SideBar />
                    </div>
                    <div className='r-col-d-7 '>
                        <div className='catg-detail-container'>
                            <h4>Casa Do Rio -Beach and Mountains</h4>
                            <div className='catg-detail-rate'><img className='rate-imgs' src={Images.path.orangeStar} />4.8</div>
                            <div className='catg-detail-pics'>
                                <img className='catg-big-img' src={Images.path.rlOne} />
                                <div className='catg-slider-detail'>
                                
                                    <img className='catg-detail-img1' src={Images.path.rlTwo} />
                                    <img className='catg-detail-img1' src={Images.path.rlFour} />
                                    <img className='catg-detail-img1' src={Images.path.rlThree} />
                    
                                </div>
                            </div>
                            <div className='check-catg-detail'>
                                <div className='category-heading-style'>
                                <h5 className='heading-txt'>Entire cottage hosted by rui & Rosali</h5>
                                <p className='heading-txt'>4 beds. 5guests</p>
                                </div>
                                <div className='check-container'>
                                    <div className='catg-amount'>ES 300/day </div>
                                    <button className='check-button-style'>Check Availability </button>
                                </div>
                            </div>
                            <div className='catg-owner'>
                                <div className='owner-profile'>
                                    <img className='owner-img-style' src={Images.path.imgprf2} />
                                    <div className='chat-owner-holder'>
                                    <h5>Owned By Jessica</h5>
                                    <div className='chat-btn-owner'>
                                    Chat with owner</div></div>
                                </div>
                            </div>
                            <h5 className='catg-desc-txt'>Description</h5>
                            <p className='catg-desc-para'>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            </p>
                            <div className='catg-review-container'>
                                <div className='review-rate-style'><img className='rate-imgs' src={Images.path.orangeStar} />4.8<h5 className='review-heading-style'>50(reviews)</h5></div>

                               
                                <div className='r-col-d-6'>
                                    <div className='user-review'>
                                        <div className='user-detail-container'>
                                            <img className='user-img-style' src={Images.path.imgprf2} />
                                            <div>
                                            <h5>Jessica Does</h5>
                                            <p>March 2020</p>
                                            </div>
                                        </div>
                                        <p>Thank you ,We loved our stay,stunning place </p>
                                    </div>
                                </div>
                                <div className='r-col-d-6'>
                                    <div className='user-review'>
                                        <div className='user-detail-container'>
                                            <img className='user-img-style' src={Images.path.imgprf2} />
                                            <div>
                                            <h5>Jessica Does</h5>
                                            <p>March 2020</p>
                                            </div>
                                        </div>
                                        <p>Thank you ,We loved our stay,stunning place </p>
                                    </div>
                                </div>

                                <div className='r-col-d-6'>
                                    <div className='user-review'>
                                        <div className='user-detail-container'>
                                            <img className='user-img-style' src={Images.path.imgprf2} />
                                            <div>
                                            <h5>Jessica Does</h5>
                                            <p>March 2020</p>
                                            </div>
                                        </div>
                                        <p>Thank you ,We loved our stay,stunning place </p>
                                    </div>
                                </div>

                                <div className='r-col-d-6'>
                                    <div className='user-review'>
                                        <div className='user-detail-container'>
                                            <img className='user-img-style' src={Images.path.imgprf2} />
                                            <div>
                                            <h5>Jessica Does</h5>
                                            <p>March 2020</p>
                                            </div>
                                        </div>
                                        <p>Thank you ,We loved our stay,stunning place </p>
                                    </div>
                                </div>
                                   <h5>Show All Reviews</h5>
                            </div>
                        </div>
                    </div>
                    <div className='r-col-d-2'>
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




export default CategoryDetail;