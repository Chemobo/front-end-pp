import React, { useEffect, useState } from "react";
function Cars(){
   const [cars, setCars] = useState([])
    useEffect (()=>{
        fetch("http://localhost:9292/cars")
        .then((res)=>res.json())
        .then((json) =>
        setCars(json))
    },[])
    console.log(cars)
    return(
        <div>{cars.map((car)=>(<ol key={car.id}>{car.model}</ol>))}</div>
    )
    }
export default Cars;