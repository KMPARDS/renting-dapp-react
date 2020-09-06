import React, { Component } from 'react';
import './ListPage.scss';
import NavBar from '../../components/Header/NavBar';
import Footer from '../../components/Footer/Index';
import Images from '../../containers/Images/Image';
//import Responsive from '../../Responsive/Responsive.css';
import { Col, Container, Row } from 'react-bootstrap';


class ListPage extends Component {
	public state: any;

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            allProduct: [],
        };

    }

    getProduct = async () => {
        const filter = window.rentingDappInstance.filters.Details(null,null);
        const logs = await window.rentingDappInstance.queryFilter(filter);
        const parseLogs = logs.map((log) => window.rentingDappInstance.interface.parseLog(log));
        const productAll = parseLogs.map(ele => ele.args);
        console.log("All :",productAll)
        this.setState({...this.state , allProduct : productAll})
        return productAll;
    }

    async componentDidMount() {
        this.getProduct();
    }

    render() {
        return (
            <div>
                <NavBar />

                <div className='myListing-wrapper-container'>
                    {
                        this.state.allProduct.map((ele: React.ReactNode[]) => {
                        return <div className='r-col-d-4 '>
                            <div className='card-category-container'>
                                <div className='overflow'>
                                    <img className='catg-imgs' src={Images.path.itemOne} />
                                </div>
                                <div className='catg-body-txt'>
                                <p>{ele[0]}</p>
                                    <div className='catg-rating'><img className='rate-imgs' src={Images.path.orangeStar} />4.5</div>
                                </div>
                                <p className='location-catg'>{ele[1]}</p>
                            </div>
                        </div>
                        })
                    }
                
                    {/*<div className='r-col-d-4'>
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
                    </div>*/}
                </div>

            </div>

        );
    }
}




export default ListPage;