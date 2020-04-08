import React, { Component } from 'react';
import './CategoryForm.scss';
import Images from '../../containers/Images/Image';
import Responsive from '../../Responsive/Responsive.css';
import NavBar from '../../components/Header/NavBar';
import Footer from '../../components/Footer/Index';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';





class CategoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <div>
                <NavBar />
                <div className='RentPage-wrapper-container'>
                    <div className='table-category'>
                        <div className='table-catg-details'>
                            <h4>Start Earning Lorem ipsum ipsum</h4>
                            <div className='r-col-d-12'>
                                <Formik
                                    initialValues={{ name: 'jared' }}
                                    onSubmit={(values, actions) => {
                                        setTimeout(() => {
                                            alert(JSON.stringify(values, null, 2));
                                            actions.setSubmitting(false);
                                        }, 1000);
                                    }}
                                >
                                    {props => (
                                        <form onSubmit={props.handleSubmit}>
                                            <input
                                                type="text"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.name}
                                                name="name"
                                            />
                                            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                                            <button type="submit">Submit</button>
                                        </form>
                                    )}
                                </Formik>
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