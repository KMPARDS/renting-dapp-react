import React, { Component } from 'react';
import './CartPage.scss';
import Images from '../../containers/Images/Image';
import Responsive from '../../Responsive/Responsive.css';
import NavBar from '../../components/Header/NavBar';
import SideBar from '../../components/SideBar/Index';
import Footer from '../../components/Footer/Index';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        return (
            <div>
                <NavBar />
               <div className='cart-wrapper-container'>
                   <div  className='row'>
                <div className='r-col-d-1'></div>
                   <div className='r-col-d-6'>
                   <h4>My Saved Products</h4>
                       <div className='product-container'>
                       <img className='prod-img-style' src={Images.path.rlFour} />
                       <div className='prod-detail-container'>
                       <h5 className='prod-title-style'>Casa da rio Beach Mountains</h5>
                       <p className='amount-prod-style'>ES 300/per-day</p>
                       <div className='prod-dates'>
                           <div className='prod-booked-from'>Booked From <p className='date-styling'>20/3/2020</p></div>
                           <div className='prod-booked-to'>To <p className='date-styling'>20/3/2020</p></div>
                           <div className='change-style'>Change Date    <FontAwesomeIcon icon={faTrashAlt} color='#A7A7A7'/></div>
                         </div>
                        </div>
                       </div>

                       <div className='product-container'>
                       <img className='prod-img-style' src={Images.path.rlFour} />
                       <div className='prod-detail-container'>
                       <h5 className='prod-title-style'>Casa da rio Beach Mountains</h5>
                       <p className='amount-prod-style'>ES 300/per-day</p>
                       <div className='prod-dates'>
                           <div className='prod-booked-from'>Booked From <p className='date-styling'>20/3/2020</p></div>
                           <div className='prod-booked-to'>To <p className='date-styling'>20/3/2020</p></div>
                           <div className='change-style'>Change Date    <FontAwesomeIcon icon={faTrashAlt} color='#A7A7A7'/></div>
                         </div>
                        </div>
                       </div>
                       
                   </div>
                   <div className='r-col-d-4'><h4 className='cart-order-summary'>OrderSummary</h4>
                   <div className='order-summary-detail'>
                   <div className='order-container'>
                       <p className='order-txt-style'>Casa da rio Beach Mountains</p>
                       <p className='order-txt-style'>ES 300/per-day</p>
                       <p className='order-date-style'>20/03/2020 to 25/03/2020</p>
                       </div>
                       <div className='order-container'>
                       <p className='order-txt-style'>Air Cooler 35L</p>
                       <p className='order-txt-style'>ES 300/per-day</p>
                       <p className='order-date-style'>20/03/2020 to 25/03/2020</p>
                       </div>
                       <div className='total-order'>
                           <h5>Total</h5>
                           <h5>60 ES</h5>
                       </div>
                      <div className='btn-container-order'> <button className='proceed-btn-style'>Proceed</button></div>
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




export default CartPage;