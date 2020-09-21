import React, { Component, useState, useEffect } from 'react';
import Images from '../Images/Image';
import './Product.scss';
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
import { RentalAgreementFactory } from '../../ethereum/typechain/RentalAgreementFactory';
import { boolean } from 'yup';
import { render } from '@testing-library/react';
import { RentalAgreement } from '../../ethereum/typechain/RentalAgreement';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
import {useMapState} from '../../MapState';

export default function Product() 
{
    const [state, setstate] = useState({title: 'Loading...', location: 'Loading...', description: 'Loading...', maxRent: 0, security: 0, cancellation: 0})
    const [timestate, settimestate] = useState({startTime: '', endTime: ''})
    const [modalstate, setmodalstate] = useState({showModal: false}); 
    const [dateState, setDateState] = useState([['','']]);
    const [contracts, setContracts] = useState({allContracts: []});
    const [check, setCheck] = useState({initial: 0, final: 0});
    const [arrState, setarrState] = useState([]);

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

        if(window.wallet===undefined)
        {
            alert("Wallet not loaded");
            return;
        }
        const filter = productInstance.filters.NewRentalContract(null,window.wallet.address,null,null,null,null,null,null,null,null);
        const logs = await productInstance.queryFilter(filter);
        const parseLogs = logs.map((log) => productInstance.interface.parseLog(log));
        const contractLogs = parseLogs.map(ele => ele.args);
        console.log("All contracts:",contractLogs)
        setContracts({allContracts : contractLogs});
        //return contracts;
        console.log(contracts.allContracts);
    }

    useEffect(()=>{(async () =>
        {
          await fetchData();
        }
      )()
    },[])

    
    function renderTimeStamp(datetime : string): number{
        const date = new Date(datetime);
        const timeStamp = date.getTime();
        return (timeStamp/1000);
    }

    function handleChecks(e:React.ChangeEvent<HTMLInputElement>)
    {
        setCheck({...check, [e.target.name] : e.target.value})
    }

    const handleRent = async () => {
        if(window.wallet===undefined)
        {
            alert("Wallet not loaded");
            return;
        }
        const agreement = await productInstance.connect(window.wallet).createAgreement(0, renderTimeStamp(timestate.startTime), renderTimeStamp(timestate.endTime));
        const contract = await agreement.wait();
        //console.log(agreement);

        const parseLogs = (contract.logs).map((log) => productInstance.interface.parseLog(log));
        console.log(parseLogs[0].args);
        alert("Rented");
    }

    const handleClose = () => {
        setmodalstate({
            showModal: false,
        })
    }

    const handleDates = async () => {
        const booked = await productInstance.getBookedDates();
        const bookings = (await productInstance.bookings()).toNumber();
        const parseDate = booked.map(ele => {
            const a = new Date(ele[0]*1000);
            const b = new Date(ele[1]*1000);
            return [a.toString(), b.toString()]
        });

        //@ts-ignore
        setDateState(parseDate);
        setmodalstate({
            showModal: true,
        })
        //alert("Dates already booked: " + parseDate);
        console.log(booked);
    }
    
    const handleFav = () => {
        if(window.wallet===undefined)
        {
            alert("Wallet not loaded");
            return;
        }

        const product = {address: address, title: state.title, rent: state.maxRent, security: state.security, cancellation: state.cancellation, description: state.description, location: state.location};        
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
    }
     
    const handleChange= (e:React.ChangeEvent<HTMLInputElement>) => {
        settimestate({...timestate,[e.target.name] : e.target.value});
    }

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
                <div className="row">
                    <h1 className="my-4 catg-body-txt">{state.title}</h1>
                    <i className="fa fa-heart" aria-hidden="true" onClick={handleFav} style={{marginTop: '30px', marginLeft: '30px', color: 'red', fontSize: '35px'}}></i>
                </div>
                
                {/* Portfolio Item Row */}
                <div className="row">
                    <div className="col-md-8">
                        <img className="img-fluid" src={Images.path.rlTwo} alt="" />
                    </div>
                    <div className="col-md-4">
                        <h3 className="my-3 catg-body-txt">Product Description</h3>
                        <h6 className="my-3 catg-body-txt desc-para">{state.description}</h6>

                        <h3 className="my-3 catg-body-txt">Payment Info</h3>
                        <h6 className="my-3 catg-body-txt desc-para">Rent: {state.maxRent} wei</h6>
                        <h6 className="my-3 catg-body-txt desc-para">Security Fee: {state.security} wei</h6>
                        <h6 className="my-3 catg-body-txt desc-para">Cancellation Fee: {state.cancellation} wei</h6>
                        <h6 className="my-3 catg-body-txt desc-para">Available Discounts: Loading...</h6>

                        <h3 className="my-3 catg-body-txt">Pick Up Address</h3>
                        <h6 className="my-3 catg-body-txt desc-para">{state.location}</h6>
                        <hr/>

                        <h6 className="my-3 catg-body-txt desc-para">Start Time: <input className="form-control" type="datetime-local" name="startTime" value ={timestate.startTime} onChange={handleChange} placeholder="Finised Time" /></h6>
                        <h6 className="my-3 catg-body-txt desc-para">End Time: <input className="form-control" type="datetime-local" name="endTime" value ={timestate.endTime} onChange={handleChange} placeholder="Finised Time" /></h6>
                        {/*<button className='listing-check-availability' onClick={handleClick}>Check Availability</button>*/}

                        {/*<button className='listing-fav' onClick={handleCart}>Mark Favourite</button>*/}
                        <button className='listing-rent-now' onClick={handleRent}>Rent Now</button>
                        <button onClick={handleDates} className='listing-booked-dates'>Check Booked Dates</button>
                    </div>
                </div>
                <br/><br/>
                
                <div className="row">
                    <table className='table'>
                        <tr>
                            <th style={{textAlign: "center"}}>Contract Address</th>
                            <th style={{textAlign: "center"}}>Lessor</th>
                            <th style={{textAlign: "center"}}>Start Date</th>
                            <th style={{textAlign: "center"}}>End Date</th>
                            <th style={{textAlign: "center"}}>Buttons</th>
                        </tr>
                        {                           
                            contracts.allContracts.map(ele => (
                                <tr>
                                    <td style={{textAlign: "center"}}>{ele[2]}</td>
                                    <td style={{textAlign: "center"}}>{JSON.stringify(ele[6])}</td>
                                    <td style={{textAlign: "center"}}>{((new Date(Number(ele[3])*1000)).toString()).split("GMT+0530 (India Standard Time)")}</td>
                                    <td style={{textAlign: "center"}}>{((new Date(Number(ele[4])*1000)).toString()).split("GMT+0530 (India Standard Time)")}</td>
                                    <td style={{textAlign: "center"}}>
                                        <div>
                                        <input 
                                            type="number" 
                                            placeholder="Enter 1 if OK else 0"
                                            style={{width: '160px'}}
                                            name='initial'
                                            onChange={handleChecks}
                                            value={check.initial}                                           
                                        />
                                        <button onClick={async () => {
                                            const agreementInstance = RentalAgreementFactory.connect(
                                                ele[2],
                                                window.wallet ?? window.provider
                                            );
                                            if(window.wallet===undefined)
                                            {
                                                alert("Wallet not loaded");
                                                return;
                                            }
                                            //var wei = utils.bigNumberify(JSON.parse(ele[6]));
                                            const checkInitial = await agreementInstance.connect(window.wallet).initialCheckByLessee( check.initial, {value: ele[6]} );

                                            console.log(checkInitial);
                                            alert("Initial check by Lessee done");
                                        }}>
                                            InitialLessee
                                        </button>
                                        </div>
                                        <hr/>
                                        <input type="text" style={{width: '100px'}}/>
                                        <button>FinalLessee</button>
                                        <hr/>
                                        <button>Terminate</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </table>
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

            {/* Bootstrap Modal */}
            <Modal 
                show={modalstate.showModal}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title> 
                        <div className='rentDaap-header-logo'> 
                            <img className='rentDaap-Img-modal'  src={Images.path.logocolor} />
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <div className='listing-txt-modal'>Product is booked already as per dates below:</div>
                    <table className='table'>
                        <tr>
                            <th style={{textAlign: "center"}}>Starting Date</th>
                            <th style={{textAlign: "center"}}>Ending Date</th>
                        </tr>
                        {
                            dateState.map(ele => (
                                <tr>
                                    <td>{ele[0].split("GMT+0530 (India Standard Time)")}</td>
                                    <td>{ele[1].split("GMT+0530 (India Standard Time)")}</td>
                                </tr>
                            ))                             
                        }
                    </table>
                </Modal.Body>
                <Modal.Footer className='delete-footer'>
                    <Button variant="secondary" className='delete-btn' onClick={() => setmodalstate({showModal: false})}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
