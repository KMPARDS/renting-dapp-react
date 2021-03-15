import React, { Component } from 'react';
import './CategoryForm.scss';
import Images from '../../containers/Images/Image';
import NavBar from '../../components/Header/NavBar';
import Footer from '../../components/Footer/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow,faImage} from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation} from 'react-router-dom';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Card, Dropdown, DropdownButton, FormControl, InputGroup} from 'react-bootstrap';
import ethers from 'ethers';

const queryString = require('query-string');


class CategoryForm extends Component {
	public state: any;

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            period: 0,
        };
    }



    render() {
        console.log(window.location.search);
        const parsed = queryString.parse(window.location.search);
        console.log(parsed);
        
        return (

            <div>
                <NavBar />
                <div className="RentPage-wrapper-container mt100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 mx-auto mt40 mb40">
                                <Card >
                                    <Card.Body>
                                        <div className='table-catg-details'>
                                            <div className='r-col-d-12'>
                                                <h5 className="mt20">Category</h5>
                                                {/* @ts-ignore */}
                                                <p className='category-select-txt'>{new URLSearchParams(this.props.location.search).get("category")} - {new URLSearchParams(this.props.location.search).get("sub")}</p>

                                                <h5>Please fill in details of your product</h5>
                                                <Formik
                                                    initialValues={{ title: '', description: '', address: '', maxrent: 0, security: 0, cancellation: 0, incentive: 0,images:[Images.path.fileUpload,Images.path.fileUpload,Images.path.fileUpload,Images.path.fileUpload] }}
                                                    
                                                    onSubmit={async (values, { setSubmitting }) => { 
                                                        try {
                                                            alert(JSON.stringify(values, null, 2));
                                                            if(window.wallet===undefined)
                                                            {
                                                                alert("Wallet not loaded");
                                                                return;
                                                            }
                                                            //@ts-ignore
                                                            const categoryId = new URLSearchParams(this.props.location.search).get("id");
                                                            const listDate = Date.now();
                                                            console.log(this.state.period);
                                                            //alert(typeof(categoryId));
                                                            if(categoryId === null)
                                                                return;
                                                            const product = await window.rentingDappInstance.connect(window.wallet).addItem(
                                                                values.title, 
                                                                values.address, 
                                                                ethers.utils.parseEther(String(values.maxrent)), 
                                                                ethers.utils.parseEther(String(values.security)), 
                                                                ethers.utils.parseEther(String(values.cancellation)), 
                                                                values.description, 
                                                                ethers.utils.formatBytes32String(categoryId), 
                                                                listDate, 
                                                                values.incentive,
                                                                values.images.toString(),
                                                                {gasLimit: 5000000}
                                                            );
                                                            product.wait();
                                                            console.log(product);
                                            
                                                            setSubmitting(false);   
                                                            alert("Product successfully listed on RentingDApp!");
                                                            //window.location.reload(false);
                                                        }  catch (error) {
                                                            alert(error.message);
                                                        }                                                  
                                                    }}
                                                >
                                                    {({
                                                        values,
                                                        errors,
                                                        touched,
                                                        handleChange,
                                                        handleBlur,
                                                        handleSubmit,
                                                        isSubmitting,
                                                        /* and other goodies */
                                                    }) => (
                                                            <form onSubmit={handleSubmit}>
                                                                <div>
                                                                    <label className='control-label'>Title *</label>
                                                                    <input
                                                                        className="form-control form-control-lg"
                                                                        type="text"
                                                                        name="title"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.title}
                                                                        required
                                                                    />
                                                                    {/*errors.email && touched.email && errors.email*/} 
                                                                    <p className='field-note-txt'>Mention the key feature of your item(e.g brand,model,age type)</p>   
                                                                                        
                                                                    <label className='control-label'>Description*</label>
                                                                    <textarea
                                                                        className='form-control'
                                                                        placeholder=''
                                                                        name='description'
                                                                        value={values.description}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        rows={3}
                                                                        data-error='Write your message'
                                                                        required
                                                                    />
                                                                    <p className='field-note-txt'>Mention condition,features and reason for renting</p>
                
                                                                    <h5>Set payment details</h5>

                                                                    <label className='control-label'>Select period*</label>
                                                                    <br/>
                                                                    <>
                                                                        <FormControl
                                                                            placeholder="Select a period of rent"
                                                                            as="select"
                                                                            className="mr-sm-2 search-field"
                                                                            id="inlineFormCustomSelect"
                                                                            onChange={(e) => {
                                                                                this.setState({period: e.target.value})
                                                                            }}
                                                                            custom
                                                                        >
                                                                            <option value={0}>Select a period for the rental price</option>
                                                                            <option value={3600}>Hourly</option>
                                                                            <option value={86400}>Daily</option>
                                                                            <option value={2592000}>Monthly</option>
                                                                            <option value={7776000}>Quaterly</option>
                                                                            <option value={15552000}>Half-Yearly</option>
                                                                            <option value={31104000}>Yearly</option>                                                                            
                                                                        </FormControl>
                                                                    </>
                                                                    <br/>
                                                                    <label className='control-label'>Maximum rent*</label>
                                                                    <div className="input-group col-md-6">
                                                                        <input 
                                                                            className="form-control"
                                                                            type="number"
                                                                            name="maxrent"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.maxrent}
                                                                        />
                                                                        <div className="input-group-append">
                                                                            <button className="btn btn-light" type="button">ES</button>
                                                                        </div>
                                                                    </div>
                
                                                                    <label className='control-label'>Security fee*</label>
                                                                    <div className="input-group col-md-6">
                                                                        <input 
                                                                            className="form-control"
                                                                            type="number"
                                                                            name="security"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.security}
                                                                        />
                                                                        <div className="input-group-append">
                                                                            <button className="btn btn-light" type="button">ES</button>
                                                                        </div>
                                                                    </div>
                
                                                                    <label className='control-label'>Cancellation fee*</label>
                                                                    <div className="input-group col-md-6">
                                                                        <input 
                                                                            className="form-control"
                                                                            type="number"
                                                                            name="cancellation"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.cancellation}
                                                                        />
                                                                        <div className="input-group-append">
                                                                            <button className="btn btn-light" type="button">ES</button>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    <br/><br/>
                                                                    <label className='control-label'>Incentive*</label>
                                                                    <div className="input-group col-md-6">
                                                                        <input 
                                                                            className="form-control"
                                                                            type="number"
                                                                            name="incentive"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.incentive}
                                                                        />
                                                                    </div>

                                                                    <br/>
                                                                    <h5>Add link of Photos</h5>
                                                                    <p className='field-note-txt'>Minimum 4 photos to be uploaded</p>
									<p className='field-note-txt'> if you don't have Image link
										<a onClick={() =>
										      window.open(
											"https://eraswap.cloud/Host/0x7E3E5B0A5035a3706b9BC717d69997b14dDf0453",
											"",
											"width=1001,height=650"
										      )
										    }>click here<a/> </p>
                                                                    <div className='upload-img-container'>
                                                                        <div className='row'>
                                                                            <div className='r-col-d-3 img-upload'> 
                                                                                <img src={values.images[0]} className='upload-pic'/>
                                                                            </div>
                                                                            <div className='r-col-d-3 img-upload'>
                                                                                <img src={values.images[1]} className='upload-pic'/>
                                                                            </div>
                                                                            <div className='r-col-d-3 img-upload'>
                                                                                <img src={values.images[2]} className='upload-pic'/>
                                                                            </div>
                                                                            <div className='r-col-d-3 img-upload'>
                                                                                <img src={values.images[3]} className='upload-pic'/>
                                                                            </div>
                                                                        </div>
                                                                        {/* @ts-ignore */}
                                                                        <input 
                                                                            className="form-control"
                                                                            type="text"
                                                                            name="images[0]"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.images[0]}
                                                                        />
                                                                        <input 
                                                                            className="form-control"
                                                                            type="text"
                                                                            name="images[1]"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.images[1]}
                                                                        />
                                                                        <input 
                                                                            className="form-control"
                                                                            type="text"
                                                                            name="images[2]"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.images[2]}
                                                                        />
                                                                        <input 
                                                                            className="form-control"
                                                                            type="text"
                                                                            name="images[3]"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.images[3]}
                                                                        />
                                                                        
                                                                    </div>
                
                                                                    <div className='location-flex'>
                                                                        <div className="location-txt"> 
                                                                            <h5>Specify Your Location</h5>    
                                                                        </div>
                                                                        <span className='location-span'>
                                                                            <FontAwesomeIcon icon={faLocationArrow} color='#FF5D22'/>Use Your Location
                                                                        </span>
                                                                    </div>
                                                                    <textarea
                                                                        className='form-control'
                                                                        placeholder=''
                                                                        name='address'
                                                                        value={values.address}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        rows={3}
                                                                        data-error='Write your message'
                                                                        required
                                                                    />
                                                                    <p className='field-note-txt'>Enter your complete address.</p>
                                                                    <button className='submit-form-btn' type="submit" disabled={isSubmitting}>
                                                                        Submit
                                                                    </button>
                                                                </div>
                                                            </form>   
                                                        )}
                                                </Formik>

                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                    
                            </div>
                        </div>
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




export default CategoryForm;
