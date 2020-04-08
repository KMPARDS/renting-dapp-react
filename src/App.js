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
import MyListing from './containers/MyListing/Index.jsx';
import CategoryForm from './containers/CategoryForm/Index';

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

         </Switch>
     </Router>
    </div>
    
  );
}

export default App;
