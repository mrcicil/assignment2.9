import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import mockAPI from './api/mockapi'
import Table from './Table'


function App() {
   const [products, setProduct] = useState();
   const [rawdata, setRawdata] = useState();
 async function apiGet() {

        console.log("this is inside async");
     try{
        //const response = await mockAPI.get("/environment/2-hour-weather-forecast");
        const response = await mockAPI.get("/real-time/api/two-hr-forecast");
        console.log('GET status:', response.status);
        console.log('new GET data:', response.data);
        setProduct(response.data);
        setRawdata(products.data.items[0].forecasts);
        console.log(rawdata);
     } catch(error){
        console.log(error.message);
     }

      
  }



  return (
    <div className="App">
      <h1>Gov Data</h1>
      <button onClick={apiGet}>Load Data</button>
      <Table list={rawdata}/>
    </div>
  );

}




export default App
