import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

const HatsPage = (props) => {
  return (
  // eslint-disable-next-line no-unused-expressions
  <div className="">
    <h1>Hats Page</h1>
    <Link to='/' >Goto Home</Link> <br/>
  </div>
  )
}
const Jacket = (props) => {
  return (
  // eslint-disable-next-line no-unused-expressions
  <div className="">
    <h1> Jakets Page : {props.match.params.id}</h1>
    <Link to='/' >Goto Home</Link> <br/>
  </div>
  )
}

const Mens = () => {
  return (
  // eslint-disable-next-line no-unused-expressions
  <div className="">
    <h1>Mens Page</h1>
    <Link to='/' >Goto Home</Link> <br/>
  </div>
  )
}

const Womens = () => {
  return (
  // eslint-disable-next-line no-unused-expressions
  <div className="">
    <h1>Womens Page</h1>
    <Link to='/' >Goto Home</Link> <br/>
  </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}  />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
