import React, { Component, useState, useEffect } from 'react';
import Images from '../Images/Image';
//import Responsive from '../../Responsive/Responsive.css';
import NavBar from '../../components/Header/NavBar';
import Footer from '../../components/Footer/Index';
import Modal from 'react-bootstrap/Modal';
import {  Button} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import ethers from 'ethers';

import { ProductManagerFactory } from '../../ethereum/typechain/ProductManagerFactory';

export default function Product() 
{
    const [state, setstate] = useState({title: 'Loading...', location: 'Loading...', description: 'Loading...', maxRent: 0, security: 0, cancellation: 0})
    const {address} = useParams(); 
    //alert(address);
    const productInstance = ProductManagerFactory.connect(
        address,
        window.wallet ?? window.provider
    );
    
    const fetchData = async () => {
        const title = await productInstance.lessorName();
        const location = await productInstance.location();
        const description = await productInstance.description();
        const maxRent = (await productInstance.maxRent()).toNumber();
        const security = (await productInstance.security()).toNumber();
        const cancellation = (await productInstance.cancellationFee()).toNumber();

        setstate({title, location, description, maxRent, security, cancellation});
    }

    useEffect(()=>{(async () =>
        {
          await fetchData();
        }
      )()
    },[])
   

    return (
        <div>
            <NavBar />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container">
                {/* Portfolio Item Heading */}
                <h1 className="my-4 catg-body-txt">{state.title}</h1>
                {/* Portfolio Item Row */}
                <div className="row">
                    <div className="col-md-8">
                        <img className="img-fluid" src={Images.path.rlTwo} alt="" />
                    </div>
                    <div className="col-md-4">
                        <h3 className="my-3 catg-body-txt">Product Description</h3>
                        <h6 className="my-3 catg-body-txt desc-para">{state.description}</h6>

                        <h3 className="my-3 catg-body-txt">Payment Info</h3>
                        <h6 className="my-3 catg-body-txt desc-para">Rent: {state.maxRent} ES</h6>
                        <h6 className="my-3 catg-body-txt desc-para">Security Fee: {state.security} ES</h6>
                        <h6 className="my-3 catg-body-txt desc-para">Cancellation Fee: {state.cancellation} ES</h6>
                        <h6 className="my-3 catg-body-txt desc-para">Available Discounts: Loading...</h6>

                        <h3 className="my-3 catg-body-txt">Pick Up Address</h3>
                        <h6 className="my-3 catg-body-txt desc-para">{state.location}</h6>
                    </div>
                </div>
                {/* /.row */}
                {/*Related Projects Row 
                <h3 className="my-4">Related Products</h3>
                <div className="row">
                    <div className="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                        <img className="img-fluid" src={Images.path.rlTwo} alt="" />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                        <img className="img-fluid" src={Images.path.rlTwo} alt="" />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                        <img className="img-fluid" src={Images.path.rlTwo} alt="" />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                        <img className="img-fluid" src={Images.path.rlTwo} alt="" />
                        </a>
                    </div>
                </div>
                {/* /.row */}
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
    )
}
