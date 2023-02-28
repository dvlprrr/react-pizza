import React, { useEffect } from 'react';

import axios from "axios";

import { Route, Routes } from 'react-router-dom';
import { Header } from "./components/index"
import { Home, Cart } from './pages/index';
import { useDispatch, useSelector } from 'react-redux';
import { setPizzas } from './store/actions/pizzas-actions';


function App() {
  const dispatch = useDispatch()
  const pizzas = useSelector(state => state.pizzas.items)

  useEffect(() => {
    axios.get("http://localhost:3000/db.json")
      .then(({ data }) => {
        dispatch(setPizzas(data.pizzas))
      })
  }, [dispatch])
  console.log(pizzas)

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home items={pizzas} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );

}

export default App;
