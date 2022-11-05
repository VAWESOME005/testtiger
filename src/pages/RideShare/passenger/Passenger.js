import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { createRide } from "../../../actions/ride";
import Iframe from "react-iframe";
import "./Passenger.css";

const Passenger = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const [fromDestination,setFromDestination]=useState("");
  const [toDestination,setToDestination]=useState("");
  const[age,setAge]=useState(18);
  return (
    
    <div>
      <div className="c-container">
        <div className="p-container">
          <h1 style={{fontSize:30}}>Welcome</h1>
          <h2 style={{fontSize:24}}>Name</h2>
        </div>
        <div>
          <h1 style={{fontSize:24}}>From destination</h1>
          <input onChange={(e)=>setFromDestination(e.target.value)} placeholder="From" type="location"/>
        </div>
        <div>
          <h1 style={{fontSize:24}}>To destination</h1>
          <input onChange={(e)=>setToDestination(e.target.value)} placeholder="To" type="location"/>
        </div>
        <div>
          <h1>Age</h1>
          <input onChange={(e)=>setAge(e.target.value)} placeholder="Age" type="number"/>
        </div>

      </div>

    </div>
  );
};

export default Passenger;
