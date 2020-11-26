import React, { Component } from 'react';
import './ListPage.scss';
import NavBar from '../../components/Header/NavBar';
import Footer from '../../components/Footer/Index';
import Images from '../../containers/Images/Image';
//import Responsive from '../../Responsive/Responsive.css';
import { Col, Container, Row, Card } from 'react-bootstrap';
import ethers from 'ethers';
import {Link} from 'react-router-dom';


class ListPage extends Component {
	public state: any;

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            allProduct: [],
        };

    }

    getProduct = async () => {
        const filter = window.rentingDappInstance.filters.ProductDetails(null,null,null,null,null,null,null,null,null,null);
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
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='myListing-wrapper-container'>
                    <div className="row">
                    {
                        this.state.allProduct.map(ele => {
                        return <div className='r-col-d-4 position-relative'>
                            <div className='card-category-container'>

                                <div className='overflow'>
                                    <img className='catg-imgs' src={Images.path.itemOne} />
                                </div>

                                <div>
                                    <p><Link className='catg-body-txt' to={'/Product/'+ele[1]}>{ele[2]}</Link></p>
                                    {/*<div className='catg-rating'><img className='rate-imgs' src={Images.path.orangeStar} />4.5</div>*/}
                                </div>

                                <p className='location-catg list-box-desc'>Description: {ele[3]}</p>
                                
                                <div className='catg-body-txt'>
                                    <p>Address: {ele[4]}</p>
                                </div>
                                
                                <div className='catg-body-txt'>
                                    <p>Rent: {ethers.utils.formatEther(ele[5])} ES</p>
                                </div>
                                <p className='location-catg'>Security Fee: {ethers.utils.formatEther(ele[6])} ES</p>
                                <p className='location-catg'>Cancellation Fee: {ethers.utils.formatEther(ele[7])} ES</p>
                                <p className='location-catg' style={{marginBottom: '0px'}}>Listed on: {((new Date(Number(ele[9]))).toString()).split("GMT+0530 (India Standard Time)")}</p>
                                <i 
                                    className="fa fa-heart" 
                                    aria-hidden="true" 
                                    onClick={() => {
                                        const address = ele[1];
                                        if(window.wallet===undefined)
                                        {
                                            alert("Wallet not loaded");
                                            return;
                                        }

                                        const product = {address: address, title: ele[2], rent: ethers.utils.formatEther(ele[5]), security: ethers.utils.formatEther(ele[6]), cancellation: ethers.utils.formatEther(ele[7]), description: ele[3], location: ele[4]};        
                                        const user = window.wallet.address;
                                        
                                        //console.log( (localStorage.getItem(JSON.stringify(user))) === null ? "True" : "False");
                                        if(localStorage.getItem(JSON.stringify(user)) === null)
                                        {
                                            let val = [];
                                            val.push(product);
                                            localStorage.setItem(JSON.stringify(user), JSON.stringify(val));
                                            alert("Added to favourites");
                                        }
                                        else
                                        {
                                            let arr = [];
                                            arr = ( JSON.parse(localStorage.getItem(JSON.stringify(user))) );
                                            let check = false;
                                            arr.map(ob=> {
                                                if(ob.title === product.title)
                                                check = true;
                                            })
                                            if(check === false)
                                            {
                                                arr.push(product);
                                                localStorage.setItem(JSON.stringify(user), JSON.stringify(arr));
                                                alert("Added to favourites");
                                            }
                                            else
                                            {
                                                alert("Already added to favourites list");
                                                for(var i=0; i<arr.length; i++)
                                                {
                                                    if(arr[i].address === product.address)
                                                    {
                                                        arr.splice(i, 1);
                                                        i--;
                                                    }
                                                }
                                                console.log(arr);
                                                localStorage.setItem(JSON.stringify(user), JSON.stringify(arr));
                                                alert("Therefore removed from favourites");
                                            }
                                        }
                                    
                                        //localStorage.removeItem(JSON.stringify(user));
                                    }}
                                    style={{marginLeft: '375px', marginBottom: '10px', color: 'red', fontSize: '20px'}}
                                >                                    
                                </i>

                            </div>
                        </div>
                        })
                    }    
                    </div>                
                </div>
                <br/>
            <br/>
            <br/>
            <div className='footer-bgd'>
                <div className='wrapper-container'>
                    <Footer />
                </div>
                <br/>
            <br/>
            <br/>
            <div className='footer-bgd'>
                <div className='wrapper-container'>
                    <Footer />
                </div>
            </div>
            </div>
            </div>

        );
    }
}

export default ListPage;