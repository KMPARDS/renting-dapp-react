import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import '~bootstrap-sass/assets/stylesheets/_bootstrap.scss';

//Pages
import Home from './containers/Home/Index';
import AllCategories from './containers/AllCategories/Index';
import categoryDetail from './containers/CategoryDetail/Index';
import CartPage from './containers/CartPage/Index';
import ListPage from './containers/ListPage/Index';
import ChatPage from './containers/ChatPage/Index';
import RentalPage from './containers/RentPage/Index';
import MyListing from './containers/MyListing/Index';
import CategoryForm from './containers/CategoryForm/Index';
import ComingSoon from './components/ComingSoon/ComingSoon';
// import {
//   categoryArray,
//   subCategoryArray,
// } from './env.js';
import RentPage from './containers/RentPage/Index';

function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
           <Route exact path="/" component={Home} />
            <Route exact path="/allCategory" component={AllCategories} />
            <Route exact path="/List" component={ListPage} />
            <Route exact path="/categoryDetail" component={categoryDetail} />
            <Route exact path="/myCart" component={CartPage} />
            <Route exact path="/myChat" component={ChatPage} />
            <Route exact path="/RentList" component={RentalPage} />
            <Route exact path="/MyListing" component={MyListing} />
            <Route exact path="/form" component={CategoryForm} />
            <Route exact path="/ComingSoon" component={ComingSoon} />
            <Route exact path="/RentPage" component={RentPage} />
            


            {/* category and subcategory routing */}
            {/* < Route path = "/List/:category"
    exact render = {
      props => {
        let categoryWordArray = [];
        for (const categoryWord of props.match.params.category.split('-')) {
          categoryWordArray.push(categoryWord.charAt(0).toUpperCase() + categoryWord.slice(1));
        }
        console.log(categoryWordArray, categoryArray);
        const categoryId = categoryArray.indexOf(categoryWordArray.join(' '));

        return <AllCategories categoryId = {
          categoryId
        }
        />; */}
      {/* }
    }
    />
    < Route path = "/List/:category/:subCategory"
    exact render = {
      props => {
        let categoryWordArray = [];
        for (const categoryWord of props.match.params.category.split('-')) {
          categoryWordArray.push(categoryWord.charAt(0).toUpperCase() + categoryWord.slice(1));
        }
        const categoryId = categoryArray.indexOf(categoryWordArray.join(' '));

        let subCategoryWordArray = [];
        for (const subCategoryWord of props.match.params.subCategory.split('-')) {
          subCategoryWordArray.push(subCategoryWord.charAt(0).toUpperCase() + subCategoryWord.slice(1))
        }
        const subCategoryId = subCategoryArray[categoryId].indexOf(subCategoryWordArray.join(' '));
        return <AllCategories categoryId = {
          categoryId
        }
        subCategoryId = {
          subCategoryId
        }
        />;
      }
    }
    /> */}
         </Switch>
     </Router>
    </div>
    
  );
}

export default App;