import React, { Component, useState, useEffect } from 'react';
import Images from '../Images/Image';
import './MyProduct.scss';
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

export default function MyProduct() 
{
    const [state, setstate] = useState({title: 'Loading...', location: 'Loading...', description: 'Loading...', maxRent: '', security: '', cancellation: ''})
    const [discountState, setDiscountState] = useState({added: 0, removed: 0});
    const [contracts, setContracts] = useState({allContracts: []});
    const [check, setCheck] = useState({initial: 0, final: 0});
    const [terminate, setTerminate] = useState({penalty: 0});
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
        const maxRent = ethers.utils.formatEther(await productInstance.maxRent());
        const security = ethers.utils.formatEther(await productInstance.security());
        const cancellation = ethers.utils.formatEther(await productInstance.cancellationFee());

        setstate({title, location, description, maxRent, security, cancellation});

        if(window.wallet===undefined)
        {
            alert("Wallet not loaded");
            return;
        }
        const filter = productInstance.filters.NewRentalContract(window.wallet.address,null,null,null,null,null,null,null,null,null);
        const logs = await productInstance.queryFilter(filter);
        const parseLogs = logs.map((log) => productInstance.interface.parseLog(log));
        const contractLogs = parseLogs.map(ele => ele.args);
        console.log("All contracts:",contractLogs)
        setContracts({allContracts : contractLogs});
        //return contracts;
    }

    useEffect(()=>{(async () =>
        {
          await fetchData();
        }
      )()
    },[])

    function handleChange(e:React.ChangeEvent<HTMLInputElement>)
    {
        setDiscountState({...discountState, [e.target.name] : e.target.value})
    }

    function handleChecks(e:React.ChangeEvent<HTMLInputElement>)
    {
        setCheck({...check, [e.target.name] : e.target.value})
    }

    function handlePenalty(e:React.ChangeEvent<HTMLInputElement>)
    {
        setTerminate({...terminate, [e.target.name] : e.target.value})
    }

    async function handleDiscounts()
    {
        const discounts = await productInstance.getDiscounts();
        alert("Available discounts: " + discounts);
    }

    async function handleAdd()
    {
        if(window.wallet===undefined)
        {
            alert("Wallet not loaded");
            return;
        }
        const disc = await productInstance.connect(window.wallet).addDiscount(discountState.added);
        alert(discountState.added+"% discount added");
    }

    async function handleRemove()
    {
        if(window.wallet===undefined)
        {
            alert("Wallet not loaded");
            return;
        }
        const disc = await productInstance.connect(window.wallet).removeDiscount(discountState.removed);
        alert(discountState.removed+"% discount removed");
    }

    async function handleDelete()
    {
        if(window.wallet===undefined)
        {
            alert("Wallet not loaded");
            return;
        }
        const deleted = await window.rentingDappInstance.connect(window.wallet).removeItem(address);
        console.log(deleted);
        alert("Listing deleted");
    }

    /*const getProduct = async () => {
        if(window.wallet===undefined)
        {
            alert("Wallet not loaded");
            return;
        }
        const filter = productInstance.filters.NewRentalContract(window.wallet.address,null,null,null,null,null,null,null,null,null);
        const logs = await productInstance.queryFilter(filter);
        const parseLogs = logs.map((log) => productInstance.interface.parseLog(log));
        const contracts = parseLogs.map(ele => ele.args);
        console.log("All contracts:",contracts)
        setContracts({allContracts : contracts});
        //return contracts;
    }*/

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
                        <hr/>

                        <button className="listing-get-discounts" onClick={handleDiscounts}>Get Discounts</button>
                        <button className="listing-delete" onClick={handleDelete}>Delete this listing</button>
                        <br/><br/>

                        <input
                            className="select-discount"
                            type="number"
                            placeholder="Select discount"
                            name='added'
                            onChange={handleChange}
                            value={discountState.added}
                        />
                        <button className="listing-add-discount" onClick={handleAdd}>Add Discount</button>
                        <br/><br/>

                        <input
                            className="select-discount"
                            type="number"
                            placeholder="Select discount"
                            name='removed'
                            onChange={handleChange}
                            value={discountState.removed}
                        />
                        <button className="listing-remove-discount" onClick={handleRemove}>Remove Discount</button>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <table className='table'>
                        <tr>
                            <th style={{textAlign: "center"}}>Contract Address</th>
                            <th style={{textAlign: "center"}}>Lessee</th>
                            <th style={{textAlign: "center"}}>Start Date</th>
                            <th style={{textAlign: "center"}}>End Date</th>
                            <th style={{textAlign: "center"}}>Buttons</th>
                        </tr>
                        {
                            contracts.allContracts.map(ele => (
                                <tr>
                                    <td style={{textAlign: "center"}}>{ele[2]}</td>
                                    <td style={{textAlign: "center"}}>{ele[1]}</td>
                                    <td style={{textAlign: "center"}}>{((new Date(Number(ele[3])*1000)).toString()).split("GMT+0530 (India Standard Time)")}</td>
                                    <td style={{textAlign: "center"}}>{((new Date(Number(ele[4])*1000)).toString()).split("GMT+0530 (India Standard Time)")}</td>
                                    <td>
                                        <div className="prd-flex">
                                            <input 
                                                type="number" 
                                                placeholder="Enter 1 if OK else 0"
                                                style={{width: '160px'}}
                                                name='initial'
                                                onChange={handleChecks}
                                                value={check.initial}                                           
                                            />
                                            <button className="listing-rent-small" onClick={async () => {
                                                const agreementInstance = RentalAgreementFactory.connect(
                                                    ele[2],
                                                    window.wallet ?? window.provider
                                                );
                                                if(window.wallet===undefined)
                                                {
                                                    alert("Wallet not loaded");
                                                    return;
                                                }
                                                const checkInitial = await agreementInstance.connect(window.wallet).initialCheckByLessor(check.initial);
                                                console.log(checkInitial);
                                                alert("Initial check by Lessor done");
                                            }}>
                                                Initial Lessor
                                            </button>
                                        </div>
                                        <hr/>

                                        <div>
                                            <input 
                                                type="number" 
                                                placeholder="Enter 1 if OK else 0"
                                                style={{width: '160px'}}
                                                name='final'
                                                onChange={handleChecks}
                                                value={check.final}                                           
                                            />
                                            <button className="listing-rent-small" onClick={async () => {
                                                const agreementInstance = RentalAgreementFactory.connect(
                                                    ele[2],
                                                    window.wallet ?? window.provider
                                                );
                                                if(window.wallet===undefined)
                                                {
                                                    alert("Wallet not loaded");
                                                    return;
                                                }
                                                const checkFinal = await agreementInstance.connect(window.wallet).finalCheckByLessor(check.final);
                                                console.log(checkFinal);
                                                alert("Final check by Lessor done");
                                            }}>
                                                Final Lessor
                                            </button>
                                        </div>
                                        <hr/>

                                        <button className="listing-rent-big" onClick={async () => {
                                            const agreementInstance = RentalAgreementFactory.connect(
                                                ele[2],
                                                window.wallet ?? window.provider
                                            );
                                            if(window.wallet===undefined)
                                            {
                                                alert("Wallet not loaded");
                                                return;
                                            }
                                            const terminate = await agreementInstance.connect(window.wallet).terminateNormally();
                                            console.log(terminate);
                                            alert("Terminated normally");
                                        }}>
                                            Terminate Normally
                                        </button>
                                        <hr/>

                                        <div className="prd-flex">
                                            <input 
                                                type="number" 
                                                placeholder="Enter penalty amount"
                                                style={{width: '160px'}}
                                                name='penalty'
                                                onChange={handlePenalty}
                                                value={terminate.penalty}                                           
                                            />
                                            <button className="listing-rent-big" onClick={async () => {
                                                const agreementInstance = RentalAgreementFactory.connect(
                                                    ele[2],
                                                    window.wallet ?? window.provider
                                                );
                                                if(window.wallet===undefined)
                                                {
                                                    alert("Wallet not loaded");
                                                    return;
                                                }
                                                const penalty = await agreementInstance.connect(window.wallet).terminateWithAdditionalCharges(ethers.utils.parseEther(String(terminate.penalty)));
                                                console.log(penalty);
                                                alert("Contract terminated with penalty");
                                            }}>
                                                Terminate with penalty
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </table>
                </div>

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
