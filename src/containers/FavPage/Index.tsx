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
import { Row, Col, Container, Button } from 'react-bootstrap';
import Calendar from 'react-calendar';
import Modal from 'react-bootstrap/Modal';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ProductManagerFactory } from '../../ethereum/typechain/ProductManagerFactory';
import { isAddress } from 'ethers/lib/utils';
import { BigNumber } from 'ethers';

export default function FavPage() 
{
    const [modalState, setModalState] = useState({showModal: false});
    const [deleteModalState, setDeleteModalState] = useState({showDeleteModal: false});
    const [dateState, setDateState] = useState({startDate: '', endDate: ''});
    const [state, setState] = useState({allProduct: []});

    const handleClose = () => {
        setModalState({showModal: false});
        setDeleteModalState({showDeleteModal: false});
        setDateState({startDate: '', endDate: ''});
    }

    const onChangeStart = (e: any) => {
        setDateState({...dateState,[e.target.name] : e.target.value});
    }

    const onChangeEnd = (e: any) => {
        setDateState({...dateState,[e.target.name] : e.target.value});
    }

    const fetchData = async () => {
        var products = [];
        if(window.wallet===undefined)
        {
            alert("Wallet not loaded");
            return;
        }
        products = ( JSON.parse(localStorage.getItem(JSON.stringify(window.wallet.address))) );
        if(products === null)
        alert("No items in favourites");
        setState({allProduct: products});
        //alert(state.allProduct.length);
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
                                        <div className='desc-para'>Rent: {ele.rent?.toLocaleString()} ES</div>
                                        <div className='desc-para'>Security Fee: {ele.security?.toLocaleString()} ES</div>
                                        <div className='desc-para'>Cancellation Fee: {ele.cancellation?.toLocaleString()} ES</div><br/>
                                        <h5 className='desc-head'>Description</h5>
                                        <p className='desc-para'>{ele.description}</p>
                                        <h5 className='desc-head'>Address</h5>
                                        <p className='desc-para'>{ele.location}</p>

                                        <Link className='desc-head' onClick={() => {
                                            let arr = [];
                                            arr = ( JSON.parse(localStorage.getItem(JSON.stringify(window.wallet.address))) );
                                            for(var i=0; i<arr.length; i++)
                                            {
                                                if(arr[i].address === ele.address)
                                                {
                                                    arr.splice(i, 1);
                                                    i--;
                                                }
                                            }
                                            localStorage.setItem(JSON.stringify(window.wallet.address), JSON.stringify(arr));
                                            alert("Product removed from favourites, refresh page");
                                            window.location.reload(false);
                                        }}>
                                            Remove from Favourites
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        })
                            
                    }
                </div>

                <div className='footer-bgd'>
                    <div className='wrapper-container'>
                        <Footer />
                    </div>
                </div>

                {/* Bootstrap Modal */}
                <Modal size="lg" show={modalState.showModal} onHide={handleClose} className="date-modal-container" >
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body >
                        <Row className="show-grid date-content">
                            <Calendar
                                onChange={onChangeStart}
                                value={Date.parse(dateState.startDate)}
                            />
                            {console.log(dateState.startDate)}
                            <Calendar
                                onChange={onChangeEnd}
                                value={Date.parse(dateState.endDate)}
                            />
                            <div className='show-dates'>
                                <p className='date-catg-head'> Casa DE Rio</p>
                                <div className="date-input-container">
                                    <input type="text" className="form-control start-input" id="inputKey" placeholder="Start Date" value={dateState.startDate} />
                                    <input type="text" className="form-control" id="inputValue" placeholder="End Date" value={dateState.endDate} />
                                </div>
                                <p className='green-date'> Available on the selected date</p>
                                <p className='red-date'> Not Available on the selected date</p>
                                <button className="date-proceed">Proceed</button>
                            </div>
                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>

                {/* Bootstrap Modal */}
                <Modal 
                    show={deleteModalState.showDeleteModal}
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
                    <Modal.Body> <div className='listing-txt-modal'>Do You want to Delete this listing</div></Modal.Body>
                    <Modal.Footer className='delete-footer'>
                        <Button variant="secondary" className='delete-btn' onClick={() => setDeleteModalState({showDeleteModal: false})}>
                            Yes
                        </Button>
                        <Button variant="primary" className='delete-btn' onClick={() => setDeleteModalState({showDeleteModal: false})}>
                            No
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
}