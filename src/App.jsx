import React, {useState, useEffect} from 'react'
import "./App.css"
export default function App() {
  let [data ,setdata] = useState([])

  async function getdata(){
    let res =await fetch("http://localhost:8080/api/Cars")
    let data =await res.json()
    setdata(data)
  }
  useEffect(()=>{
    getdata()

  }, [])

  return (

    <div>
      <center>
        <h1>Car Gallery </h1> 
        </center>
    
    <div id="CarContainer">
  {
    data.length>0?
    data.map((car)=>(
      <div className="Card" key={car.id}>
        <img src={car.poster} alt="" />

        <h2>{car.Brand} {car.Model}</h2>

        <p>
          This car is {car.speed} km/hr and costs ${car.Price}
        </p>

        <button>Buy Now</button>
      </div>

    )):<p>No cars found</p>
  }
</div>
    </div>
  )
}
