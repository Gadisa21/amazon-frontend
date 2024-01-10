import React, { useEffect } from 'react'
import Header from"./Component/Header.js"
import Home from './Component/Home.js'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import CheckOut from './Component/CheckOut.js'
import "./App.css"
import Login from './Component/Login.js'
import Orders from './Component/Orders.js'
import { useStateValue } from './Component/StateProvider.js'
import { auth } from './Component/Firebase.js'
import Payment from './Component/Payment.js'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
const promise = loadStripe(
  "pk_test_51OPMDvFSE4NUJxA98vKTYYek8EuScg5FAAF2VgyMdNgMot5FypBB6fqawcgAIseBUpUhkYS6IeHstUMTG2jcuzWf00R7nvwqyu"
);

function App() {
  const [{},dispatch]=useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
       dispatch({
        type:"SET_USER",
        basket:[],
        user:authUser
       })
       
      } else{
        dispatch({
          type:"SET_USER",
          user:null,
          basket:[]
        })
      }
    })
  },[])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App