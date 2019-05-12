import React, { Component } from 'react';
import './main.css';
import Header from './Header/header'
import Body from './Body/body'
import { HashRouter as Router, Link } from 'react-router-dom'

class Main extends Component {
  render(){
    return (
      <Router>
        <div className="App">
        <div className='upMenu home'><Link className='itemLink' to='/'>Home</Link></div>
        <div className='lowerContainer'>
          <Header />
          <Body />
        </div>

        
       
      </div>
      </Router>
    )
  }
}

export default Main;