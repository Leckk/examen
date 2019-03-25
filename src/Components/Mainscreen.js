import React, { Component } from 'react';
import { Provider } from "react-redux";
import {createStore, combineReducers}  from 'redux';
import Navbar from './Navbar'
import Project from './Project'
import Jumbotron from './Jumbotron'
import Footer from './Footer'
class Mainscreen extends Component {
  render() {
    return (
        <div className='App'>
            <Navbar />
            <Jumbotron/>
            <Project />
            <Footer />
        </div>
    );
  }
}

export default Mainscreen;
