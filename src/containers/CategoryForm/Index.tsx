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

const queryString = require('query-string');


class CategoryForm extends Component {
	public state: any;

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {

        };
    }

    render() {
        console.log(window.location.search);
        const parsed = queryString.parse(window.location.search);
        console.log(parsed);

        const SignupSchema = Yup.object().shape({
            firstName: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            lastName: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email')
                .required('Required'),
        });
        return (
            <div>
                <NavBar />
                <div className='RentPage-wrapper-container'>
                    <div className='table-category'>
                        <div className='table-catg-details'>
                            <div className='r-col-d-12'>
                                <h5>Category</h5>
                                <p className='category-select-txt'>{new URLSearchParams(this.props.location.search).get("category")} - {new URLSearchParams(this.props.location.search).get("sub")}</p>
                                <h5>Please fill in details of your product</h5>
                                <Formik
                                    initialValues={{ email: '', password: '', firstname: '' }}
                                    validate={values => {
                                        let errors = {};
                                        if (!values.email) {
                                            errors.email = 'Required';
                                        } else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                            errors.email = 'Invalid email address';
                                        }

                                        if (!values.password) {
                                            errors.password = 'Required';
                                        } else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.password)
                                        ) {
                                            errors.email = 'Invalid password ';
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                            alert(JSON.stringify(values, null, 2));
                                            setSubmitting(false);
                                        }, 400);
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
                                                        class="form-control form-control-lg"
                                                        type="email"
                                                        name="email"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                    />
                                                    {errors.email && touched.email && errors.email} 
                                                    <p className='field-note-txt'>Mention the key feature of your item(e.g brand,model,age type)</p>   
                                                                           
                                                            <label className='control-label'>
                                                            Description*
                                                            </label>
                                                            <textarea
                                                            className='form-control'
                                                            placeholder=''
                                                            name='Description'
                                                            value={values.firstname}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            rows={3}
                                                            data-error='Write your message'
                                                            required
                                                            />
                                                            <p className='field-note-txt'>Mention condition,features and reason for renting</p>
                                                            <h5>Set payment details</h5>
                                                      <label className='control-label'>Maximum rent*</label>
                                                      <div class="input-group col-md-6">
                                                        <input 
                                                         class="form-control"
                                                          type="text"
                                                            name="firstname"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.firstname}/>
                                                            <div class="input-group-append">
                                                                <button class="btn btn-light" type="button">ES</button>
                                                            </div>
                                                        </div>

                                                      <label className='control-label'>Security fee*</label>
                                                      <div class="input-group col-md-6">
                                                        <input 
                                                         class="form-control"
                                                          type="text"
                                                            name="firstname"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.firstname}/>
                                                            <div class="input-group-append">
                                                                <button class="btn btn-light" type="button">ES</button>
                                                            </div>
                                                        </div>

                                                      <label className='control-label'>Cancellation fee*</label>
                                                      <div class="input-group col-md-6">
                                                        <input 
                                                         class="form-control"
                                                          type="text"
                                                            name="firstname"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.firstname}/>
                                                            <div class="input-group-append">
                                                                <button class="btn btn-light" type="button">ES</button>
                                                            </div>
                                                        </div>

                                                        {/* <input
                                                            type="text"
                                                            name="firstname"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.firstname}
                                                        />
                                                        {errors.firstname && touched.firstname && errors.firstname} */}
                                                        <h5>Upload Photos</h5>
                                                        <p className='field-note-txt'>Minimum 4 photos to be uploaded</p>
                                                        <div className='upload-img-container'>
                                                            <div className='row'>
                                                                <div className='r-col-d-3 img-upload'> 
                                                               <img src={Images.path.fileUpload} className='upload-pic'/>
                                                                </div>
                                                                <div className='r-col-d-3 img-upload'>
                                                                 <img src={Images.path.fileUpload} className='upload-pic'/>
                                                                </div>
                                                                <div className='r-col-d-3 img-upload'>
                                                                 <img src={Images.path.fileUpload} className='upload-pic'/>
                                                                </div>
                                                                <div className='r-col-d-3 img-upload'>
                                                                 <img src={Images.path.fileUpload} className='upload-pic'/>
                                                                </div>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='r-col-d-3 img-upload'> 
                                                                <input type='file' onchange="readURL(this);"/>
                                                               <img id="blah" src={Images.path.fileUpload} className='upload-pic'/>
                                                                </div>
                                                                <div className='r-col-d-3 img-upload'>
                                                                 <img src={Images.path.fileUpload} className='upload-pic'/>
                                                                </div>
                                                                <div className='r-col-d-3 img-upload'>
                                                                 <img src={Images.path.fileUpload} className='upload-pic'/>
                                                                </div>
                                                                <div className='r-col-d-3 img-upload'>
                                                                 <img src={Images.path.fileUpload} className='upload-pic'/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='location-flex'><div className="location-txt"> <h5>Confirm Your Location</h5>    </div><span className='location-span'>
                                                             <FontAwesomeIcon icon={faLocationArrow} color='#FF5D22'/>Use Your Location</span></div>
                                                        <div class="input-group input-group-sm">
                                                <input type="text" class="form-control  col-md-8 bottom-field" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Country/Region"/>
                                                </div>
                                                <div class="input-group input-group-sm">
                                                <input type="text" class="form-control  col-md-8 bottom-field" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Street address"/>
                                                </div>
                                                <div className="address-flex-style">
                                                <div class="input-group input-group-sm col-md-4">
                                                    <input type="text" class="form-control bottom-field" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="inputKey" placeholder="City"/>
                                                </div>
                                                <div class="input-group input-group-sm col-md-4">
                                                    <input type="text" class="form-control bottom-field" aria-label="Small"  aria-describedby="inputGroup-sizing-sm" id="inputValue" placeholder="District"/>
                                                </div>
                                                </div>
                                                <div class="col-md-6 pinStyle">
                                                    <input type="text" class="form-control bottom-field" aria-label="Small" aria-describedby="inputGroup-sizing-sm"  id="inputValue" placeholder="Pincode"/>
                                                </div>
                                                    <button className='submit-form-btn' type="submit" disabled={isSubmitting}>
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        )}
                                </Formik>

                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='form-footer-style'>
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




export default CategoryForm;