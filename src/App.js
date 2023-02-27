import React, { useState, useEffect } from 'react';

import axios from "axios";

import { Route, Routes } from 'react-router-dom';
import { Header } from "./components/index"
import { Home, Cart } from './pages/index';
import { connect } from 'react-redux';
import { store } from './store';
import { setPizzas } from './store/actions/pizzas-actions';


// function App() {

//   useEffect(() => {
//     
//   }, [])



//   return
// }

class App extends React.Component {

  componentDidMount() {
    axios.get("http://localhost:3000/db.json")
      .then(({ data }) => {
        store.dispatch(setPizzas(data.pizzas))
      })
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home items={this.props.items} />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    items: state.pizzas.items
  }
}

export default connect(mapStateToProps)(App);
