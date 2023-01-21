import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushi, setSushi] = useState([])
  const [eatenSushi, setEatenSushi] = useState([])
  const [wallet, setWallet] = useState(100)


  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(sushiData => setSushi(sushiData))
  }, [])

  const handleEatenClick = (name, price) => {
      setWallet(wallet - price)
      setEatenSushi([...eatenSushi, name])

  }




  return (
    <div className="app">
      <SushiContainer sushi={sushi} handleEatenClick={handleEatenClick} wallet={wallet}/>
      <Table eatenSushi={eatenSushi} wallet={wallet} />
    </div>
  );
}

export default App;
