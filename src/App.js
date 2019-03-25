import React, { Component } from 'react';
import './App.css';
import { Provider } from "react-redux";
import {createStore, combineReducers}  from 'redux';
import Mainscreen from "./Components/Mainscreen";
import Likeproject from './Reducers/Likeproject.Reducer'
const store = createStore(combineReducers({Likeproject}));
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <Mainscreen/>
        </div>
      </Provider>
    );
  }
}

export default App;
