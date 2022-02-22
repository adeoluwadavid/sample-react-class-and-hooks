import { useState } from "react";
function UseState() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });
const updateColor = ()=>{
    setCar(previousState =>{
        return {...previousState, color:"blue"}
    })
}
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>This is USE STATE</h1>
      <h1>My {car.brand} </h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor}>Blue</button>
    </div>
  );
}

export default UseState;
