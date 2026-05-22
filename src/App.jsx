import React, {useState, useEffect} from 'react'
import "./App.css"
export default function App() {
  let [data ,setdata] = useState([
   {
    id:101,
    poster:"https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2021/07/08/f807fca0-7882-476e-9c2b-0123b6797b90_9b321643.jpg",
    Brand:"bugati",
    Model:"veyron",
    Price:1000000,
    speed:400,
  },
  {
    id:101,
    poster:"https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2021/07/08/f807fca0-7882-476e-9c2b-0123b6797b90_9b321643.jpg",
    Brand:"bugati",
    Model:"veyron",
    Price:1000000,
    speed:400,
  },
  {
    id:101,
    poster:"https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2021/07/08/f807fca0-7882-476e-9c2b-0123b6797b90_9b321643.jpg",
    Brand:"bugati",
    Model:"veyron",
    Price:1000000,
    speed:400,
  },
  {
    id:101,
    poster:"https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2021/07/08/f807fca0-7882-476e-9c2b-0123b6797b90_9b321643.jpg",
    Brand:"bugati",
    Model:"veyron",
    Price:1000000,
    speed:400,
  },
   {
    id:101,
    poster:"https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2021/07/08/f807fca0-7882-476e-9c2b-0123b6797b90_9b321643.jpg",
    Brand:"bugati",
    Model:"veyron",
    Price:1000000,
    speed:400,
  },
   {
    id:101,
    poster:"https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2021/07/08/f807fca0-7882-476e-9c2b-0123b6797b90_9b321643.jpg",
    Brand:"bugati",
    Model:"veyron",
    Price:1000000,
    speed:400,
  },

])
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
