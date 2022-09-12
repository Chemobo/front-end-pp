import React,{useEffect, useState} from "react";
import { NewCar } from "./NewCar";
import { Delete } from "./Delete";

function Hire() {
    const [cars, setCars] = useState([])
    useEffect (()=>{
        fetch("http://localhost:9292/owners")
        .then((res)=>res.json())
        .then((json) =>
        setCars(json))
    },[])
    console.log(cars)

    function onAddHire(newCars){
        setCars([...cars, newCars])
    }
    function handleDelete(deletedCars){
        const updatedCars = cars.filter((car) => car.id !== deletedCars.id )
        setCars(updatedCars)
    }
    return (
        <div>
        <div className="flex justify-center h-600 w-800 mt-12">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-300 shadow-lg">
        <ul class="list-inside ...">
        {cars.map((car) => (
          <Delete id={car.id} key={car.id} car={car}  onDelete={handleDelete} />
        ))}
      </ul>
        <NewCar onAddHire = { onAddHire}/>
        </div>
        </div>
        </div>
    )
    
}
export default Hire;