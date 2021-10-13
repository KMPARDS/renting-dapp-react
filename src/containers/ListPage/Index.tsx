import ethers from 'ethers';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Index';
import NavBar from '../../components/Header/NavBar';
import './ListPage.scss';

class ListPage extends Component {
	public state: any;

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
          allProduct: [],
        }
    }

    getProduct = async () => {
        const filter = window.rentingDappInstance.filters.ProductDetails(null,null,null,null,null,null,null,null,null,null,null);
        const logs = await window.rentingDappInstance.queryFilter(filter);
        const parseLogs = logs.map((log) => window.rentingDappInstance.interface.parseLog(log));
        var productAll = parseLogs.map(ele => ele.args);
        let products = ( JSON.parse(localStorage.getItem(JSON.stringify(window.wallet.address))) );
        
        var displayProducts = [];

        for(var i=0; i<productAll.length; i++)
        {
          var status = await window.rentingDappInstance.isAvailable(productAll[i][1]);
          if(status === true)
          {
            console.log(parseLogs)
            displayProducts.push(productAll[i]);
          }
        }

        console.log(this.state.allProduct);
 
        this.setState({...this.state , allProduct : displayProducts});

        return displayProducts;

    }

    async componentDidMount() {
        this.getProduct()

    }

    render() {
        return (
            <div>
                <NavBar />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='myListing-wrapper-container'>
                    <div className="row">
                    {
                        this.state.allProduct.map((ele: any) => {
                        return <div className='r-col-d-4 position-relative'>
                            <div className='card-category-container'>

                                <div className='overflow'>
                                    <img className='catg-imgs' src={(ele[10].split(','))[0]} />
                                </div>
                                
                                <div className='card-category-body' >
                                    <div className='title' >
                                        <p><Link to={'/Product/'+ele[1]}>{ele[2]}</Link></p>
                                        {/*<div className='catg-rating'><img className='rate-imgs' src={Images.path.orangeStar} />4.5</div>*/}
                                    </div>

                                    <p className='desc my-3' > <strong> Description: </strong> {ele[3]}</p>
                                    <p> <strong> Address: </strong> {ele[4]}</p>
                                    <p> <strong> Rent: </strong> {ethers.utils.formatEther(ele[5])} ES</p>
                                    <p> <strong> Security Fee: </strong> {ethers.utils.formatEther(ele[6])} ES</p>
                                    <p> <strong> Cancellation Fee: </strong> {ethers.utils.formatEther(ele[7])} ES</p>
                                    <p style={{marginBottom: '1rem'}}> <strong> Listed on: </strong> {((new Date(Number(ele[9]))).toString()).split("GMT+0530 (India Standard Time)")}</p>
                                </div>
                                
                            </div>
                        </div>
                        })
                    }    
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

        );
    }
}

export default ListPage;