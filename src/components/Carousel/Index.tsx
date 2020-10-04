import React, { Component } from 'react';
import './Carousel.scss';
import Images from '../../containers/Images/Image';
import { Col, Container, Row } from 'react-bootstrap';
import Responsive from '../../Responsive/Responsive.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ethers from 'ethers';
import {Link} from 'react-router-dom';


class CarouselPage extends Component {
	public state: any;
	public props: any;

  constructor(props) {
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
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };

    return (
      <div className='slider-item-main'>
        <Container>
          <Carousel
            responsive={responsive}
            infiniteLoop
            deviceType={this.props.deviceType}
            useKeyboardArrows
          >                  
            {
              this.state.allProduct.map(ele => {
                return <div className='card text-center'>
                          <div className='overflow'>
                            <img className='car-slider-img' src={Images.path.itemOne}/>
                          </div>
                          <div className='card-body text-dark'>
                            <h5 className='card-title'>{ele[2]}</h5>
                            <h6 className='card-rent-text'>Rent</h6>
                            <p>{ethers.utils.formatEther(ele[5])} ES</p>
                            <Link className='btn btn-outline' to={'/Product/'+ele[1]}>View</Link>
                          </div>
                        </div>
              })
            }
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default CarouselPage ;