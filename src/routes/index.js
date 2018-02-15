import React,{Component} from 'react';
import {
  BrowserRouter as
  Router,
  Route,
  Link,
  Switch} from 'react-router-dom';



const Home = ()=>{
  return(
    <div>
      <p>Home</p>
    </div>
  )
}

const Love = ()=>{
  return(
    <div>
      <p>Love</p>
    </div>
  )
}

export default () =>(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/love">Love</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/love' exact component={Love}/>
      </Switch>
    </div>
  </Router>
);
