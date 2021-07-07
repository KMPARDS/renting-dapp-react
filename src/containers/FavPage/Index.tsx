import React, { Component, useState, useEffect } from 'react';
import './FavPage.scss';
import '../CategoryDetail/CategoryDetail.scss';
import Images from '../../containers/Images/Image';
//import Responsive from '../../Responsive/Responsive.css';
import NavBar from '../../components/Header/NavBar';
import SideBar from '../../components/SideBar/Index';
import Footer from '../../components/Footer/Index';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Button ,Alert} from 'react-bootstrap';
import Calendar from 'react-calendar';
import Modal from 'react-bootstrap/Modal';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { isAddress } from 'ethers/lib/utils';
import { BigNumber } from 'ethers';

export default function FavPage() 
{
    const [state, setState] = useState({allProduct: []});

    const fetchData = async () => {
        var products = [];
        if(window.wallet===undefined)
        {
            alert("Wallet not loaded");
            return;
        }
        //@ts-ignore
        products = ( JSON.parse(localStorage.getItem(JSON.stringify(window.wallet.address))) );

        var displayProducts = [];

        for(var i=0;i<products.length; i++)
        {
            console.log(products[i].address);
            var status = await window.rentingDappInstance.isAvailable(products[i].address);
            console.log(status);
            if(status === true)
                displayProducts.push(products[i]);
        }

        if(displayProducts === null)
        {
            alert("No items in favourites");
            return;
        }
        //@ts-ignore
        setState({allProduct: displayProducts});
        
        console.log(displayProducts);
    }

    useEffect(()=>{(async () =>
        {
          await fetchData();
        }
      )()
    },[])

    const handleRemove = () => {
        alert('Hi');
    }
    return (
            <div>
                <NavBar />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/><br/>
                <div className='myListing-wrapper-container'>

                    {                     
                     state.allProduct?.length ? (   
                        state.allProduct.map((ele: React.ReactNode[]) => {
                            return <div className='row listing-border'>
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
                                        <h5><Link className='listing-head' to={'/Product/'+ele.address}>{ele.title}</Link></h5>
                                        <div className='desc-para'>Rent: {ele.rent} ES</div>
                                        <div className='desc-para'>Security Fee: {ele.security} ES</div>
                                        <div className='desc-para'>Cancellation Fee: {ele.cancellation
                                        } ES</div>
                                        <br/>
                                        <h5 className='desc-head'>Description</h5>
                                        <p className='desc-para'>{ele.description}</p>
                                        <h5 className='desc-head'>Address</h5>
                                        <p className='desc-para'>{ele.location}</p>

                                        <Button style={{color: "white"}} className='desc-head' onClick={() => {
                                            let arr = [];
                                            //@ts-ignore
                                            arr = ( JSON.parse(localStorage.getItem(JSON.stringify(window.wallet.address))) );
                                            for(var i=0; i<arr.length; i++)
                                            {
                                                //@ts-ignore
                                                if(arr[i].address === ele.address)
                                                {
                                                    arr.splice(i, 1);
                                                    i--;
                                                }
                                            }

                                            if(window.wallet===undefined)
                                            {
                                                alert("Wallet not loaded");
                                                return;
                                            }

                                            localStorage.setItem(JSON.stringify(window.wallet.address), JSON.stringify(arr));
                                            alert("Product removed from favourites, refresh page");
                                            //window.location.reload(false);
                                        }}>

                                             <i className="fa fa-heart" style={{ color:'red'}} aria-hidden="true"></i>
                                        
                                        </Button>

                                    </div>
                                </div>
                            </div>
                        })
                     ):(
                        <Alert variant="secondary">
                        You have no favourites Listed
                      </Alert>
                     ) 
                    }
                </div>

                <div className='footer-bgd'>
                    <div className='wrapper-container'>
                        <Footer />
                    </div>
                </div>                
            </div>
        )
}