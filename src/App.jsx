import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import mockAPI from './api/mockapi'



function App() {
 async function apiGet() {
        console.log("this is inside async");
     try{
        const response = await mockAPI.get("/environment/2-hour-weather-forecast");
        console.log('GET status:', response.status);
        console.log('GET data:', response.data);
        setProduct(response.data);
     } catch(error){
        console.log(error.message);
     }

      
  }

  return (
    <div className="App">
      <h1>Gov Data</h1>
      <button onClick={apiGet}>Load Data</button>
    </div>
  );

}




export default App
