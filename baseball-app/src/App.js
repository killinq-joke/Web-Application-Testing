import React, { useState } from "react";
import Display from "./Components/Display";
import Dashboard from "./Components/Dashboard";
import "./App.css";

function App() {
  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0);
  
  return (
    <div className="App">
      <Display
        ballCount={ballCount}
        strikeCount={strikeCount} 
        />
        <Dashboard 
          ballCount={ballCount}
          setBallCount={setBallCount}
          strikeCount={strikeCount}
          setStrikeCount={setStrikeCount}
          />
    </div>
  );
}

export default App;
