import React, { Component } from 'react';
import './SideBar.scss';
import Images from '../../containers/Images/Image';
import { withRouter } from 'react-router-dom';
import Responsive from '../../Responsive/Responsive.css';
import { categoryArray,subCategoryArray } from '../../env';
import { Link , NavLink } from 'react-router-dom';

// class SideBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             clicked: false,
//         };

//     }

//     handleClick=() =>{
//             this.setState({clicked: !this.state.clicked})
//     }


//     render() {
//         var className = !this.state.clicked ? 'subctg-txt' : 'subctg-txt-active';
//         return (

              
//             <div className='sideBar-container'>
//                 <div className='category-main'>
//                     All Categories
//           </div>
//                 <div className='subcategories'>
//                     <ul className='subctg-list'>
//                         <li> < NavLink className='subctg-txt'  to='/allCategory'  activeClassName="active" > For Sale:Houses & Appartments(14058)</NavLink></li>
//                         <li> < NavLink className='subctg-txt'  to='/allCategory' activeClassName="active" > For Sale:Houses & Appartments(14058)</NavLink></li>
//                         <li> < NavLink className='subctg-txt'  to='/allCategory' activeClassName="active" > For Sale:Houses & Appartments(14058)</NavLink></li>
//                         <li>< NavLink className='subctg-txt'  to='/allCategory' activeClassName="active" >For Rent:Houses & Appartments(88859)</NavLink></li>
//                         <li ><Link className='subctg-txt' to='/allCategory' activeClassName="active">Lands & Plots</Link></li>
//                         <li>Shops & Offices</li>
//                         <li>PG & Guest Houses(45202)</li>
//                     </ul>
                  
//                 </div>
//             </div>
//         );
//     }
// }




// export default SideBar;
const Sidebar = props => {
    const listOfCategories = [];
    const listOfSubCategories = [];
  
    for(const categoryId in categoryArray) {
      const listOfSubCategories = [];
  
      for(const subCategoryId in subCategoryArray[categoryId]) {
        const url = `/List/${categoryArray[categoryId].toLowerCase().split(' ').join('-')}/${subCategoryArray[categoryId][subCategoryId].toLowerCase().split(' ').join('-')}`;
  
        listOfSubCategories.push(
          <li key={url} onClick={() => props.history.push(url)}>{subCategoryArray[categoryId][subCategoryId]}</li>
        );
      }
  
      listOfCategories.push(
        <>
        <li>
          <a
            onClick={() => props.history.push(`/List/${categoryArray[categoryId].toLowerCase().split(' ').join('-')}`)}
            className={props.match.params.category === categoryArray[categoryId].toLowerCase()
              ? 'menu-lef-act' : null}>
            {categoryArray[categoryId]}
          </a>
        </li>
  
        </>
      );
    }
    console.log('listOfCategories', listOfCategories);
    if(props.location.pathname === '/') return null;
  
    return (
      <>
      <section>
            {/* LEFT SIDE NAVIGATION MENU */}
            <div className="menu moz-scroll-width">
              <ul>
                {/* MAIN MENU */}
                <li>
                  <a
                    onClick={() => props.history.push(`/allCategory`)}
                    className={props.location.pathname === '/allCategory' ? 'menu-lef-act' : null}><img src="/img/icon/all.png" alt="" /> All category</a>
                </li>
                {listOfCategories}
              </ul>
              <ul>
                {/* MAIN MENU */}
                <li>
                  <a
                    onClick={() => props.history.push(`/allCategory`)}
                    className={props.location.pathname === '/allCategory' ? 'menu-lef-act' : null}> All</a>
                </li>
                {listOfSubCategories}
              </ul>
            </div>
            {/* RIGHT SIDE NAVIGATION MENU */}
            {/* MOBILE MENU(This mobile menu show on 0px to 767px windows only) */}
            <div className="mob-menu">
              <span><i className="fa fa-bars" aria-hidden="true" /></span>
            </div>
            <div className="mob-close">
              <span><i className="fa fa-times" aria-hidden="true" /></span>
            </div>
          </section>
        {/* <Sidebar /> */}
      </>
    );
  }
  
  export default withRouter(Sidebar);