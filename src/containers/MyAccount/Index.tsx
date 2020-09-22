import React, { Component } from 'react';
import './MyAccount.scss';
import NavBar from '../../components/Header/NavBar';
import Footer from '../../components/Footer/Index';
import Images from '../../containers/Images/Image';
//import Responsive from '../../Responsive/Responsive.css';
import { Col, Container, Row, Card, Tab, Nav, Section } from 'react-bootstrap';
import ethers from 'ethers';
import { Link } from 'react-router-dom';


class MyAccount extends Component {
    public state: any;

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            allProduct: [],
            allOrders: [],
        };

    }

    getProduct = async () => {
        if(window.wallet===undefined)
        {
            alert("Wallet not loaded");
            return;
        }
        const filter = window.rentingDappInstance.filters.ProductDetails(window.wallet.address, null, null, null, null, null, null, null, null);
        const logs = await window.rentingDappInstance.queryFilter(filter);
        const parseLogs = logs.map((log) => window.rentingDappInstance.interface.parseLog(log));
        const productAll = parseLogs.map(ele => ele.args);
        console.log("All :", productAll)
        this.setState({ ...this.state, allProduct: productAll })
        return productAll;
    }

    fetchData = async () => {
        var orders = [];
        if(window.wallet===undefined)
        {
            alert("Wallet not loaded");
            return;
        }
        const userId = ''+window.wallet.address+'store';
        orders = ( JSON.parse(localStorage.getItem(JSON.stringify(userId))) );
        if(orders === null)
        alert("No items in favourites");
        this.setState({ ...this.state, allOrders: orders});
        //alert(state.allProduct.length);
    }

    async componentDidMount() {
        this.getProduct();
        this.fetchData();
    }

    render() {
        return (
            <div>
                <NavBar />
               
                <section className="mt100 pdt20">
                    <Container >
                        <Row>
                            <Col lg={12}>
                                <h4>My Account</h4>
                            </Col>
                        </Row>
                        <hr/>
                      
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                  
                            <Row>
                                <Col sm={3} className="mb20">
                                    <Nav variant="pills" className="flex-column tab-com">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first" className="list-group-item list-group-item-action">My Orders</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second"  className="list-group-item list-group-item-action mb20">My Listings</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>

                                <Col sm={9}>
                                    <Tab.Content>

                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {
                                                    this.state.allOrders.map((ele: React.ReactNode[]) => {
                                                        return <Col lg={4}>
                                                                    <div className="card-category-container">
                                                                        <div className="overflow">
                                                                            <img className="catg-imgs" src="/static/media/itemOne.e8af2a1c.jpg" />
                                                                        </div>
                                                                        <div>
                                                                            <p><Link className='stretched-link catg-body-txt' to={'/Product/'+ele.address}>{ele.title}</Link></p>
                                                                        </div>
                                                                        <p className="location-catg list-box-desc">Description: {ele.description}</p>
                                                                        <div className="catg-body-txt">
                                                                            <p>Address: {ele.location}</p>
                                                                        </div>
                                                                        <div className="catg-body-txt">
                                                                            <p>Rent: {ele.rent} ES</p>
                                                                        </div>
                                                                        <p className="location-catg">Security Fee: {ele.security} ES</p>
                                                                        <p className="location-catg">Cancellation Fee: {ele.cancellation} ES</p>
                                                                    </div>
                                                                </Col>
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="second">
                                            <Row>
                                            {
                                                this.state.allProduct.map((ele: React.ReactNode[]) => {
                                                    return <Col lg={4}>
                                                                <div className="card-category-container">
                                                                    <div className="overflow">
                                                                        <img className="catg-imgs" src="/static/media/itemOne.e8af2a1c.jpg" />
                                                                    </div>
                                                                    <div>
                                                                        <p><Link className='stretched-link catg-body-txt' to={'/MyProduct/'+ele[1]}>{ele[2]}</Link></p>
                                                                    </div>
                                                                    <p className="location-catg list-box-desc">Description: {ele[3]}</p>
                                                                    <div className="catg-body-txt">
                                                                        <p>Address: {ele[4]}</p>
                                                                    </div>
                                                                    <div className="catg-body-txt">
                                                                        <p>Rent: {ethers.utils.formatEther(ele[5])} ES</p>
                                                                    </div>
                                                                    <p className="location-catg">Security Fee: {ethers.utils.formatEther(ele[6])} ES</p>
                                                                    <p className="location-catg">Cancellation Fee: {ethers.utils.formatEther(ele[7])} ES</p>
                                                                </div>
                                                            </Col>
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>

                                    </Tab.Content>
                                </Col>

                            </Row>

                        </Tab.Container>

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

export default MyAccount;