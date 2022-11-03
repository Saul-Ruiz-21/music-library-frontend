import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";


function App() {

  const [entries, setEntries] = useState([])

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
