import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <button className="toggleForm" onClick={()=>
          show?setShow(false):setShow(true)
      }>
        {show?"Add House":"Rentals"}
      </button>
      {show?<Rentals/>:<AddHouse/>}
      <br />
    </div>
  );
}

export default App;
