import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import mockAPI from './api/mockapi'

const datasetId = "d_a3c783f11d79ff7feb8856f762ccf2c5"
const url = "https://api-open.data.gov.sg/v1/public/api/datasets/" + datasetId + "/poll-download";




function App() {

  async function apiGet(){
    try {
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch poll-download data');
  }
  const jsonData = await response.json();
  if (jsonData['code'] != 0) {
    throw new Error(jsonData['errMsg']);
  }
  
  const fetchUrl = jsonData['data']['url'];
  response = await fetch(fetchUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch inner data');
  }
  console.log(await response.text())
} catch (e) {
  console.error(e);
}
  }


  return (
    <div className="App">
      <h1>Product List</h1>
      <button onClick={apiGet}>Load Products</button>
    </div>
  );

}

export default App
