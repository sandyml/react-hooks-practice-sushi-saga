import React, { useEffect, useState } from 'react';
import SushiContainer from './SushiContainer';
import Table from './Table';

const API = "http://localhost:3001/sushis"

const App = () => {
	const [allSushi, setAllSushis] = useState([])
	const [sushiIndex, setSushiIndex] = useState(0)
  const [eatenSushi, setEatenSushi] = useState([])
  const [money, setMoney] = useState(100) // $100 FOR SUSHI 

	// Only runs when the component mounts
  // fetch all sushi data from db.json
  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      // .then(sushiData => setAllSushis(sushiData))
      // .then(sushiData => console.log(sushiData))
      .then(setAllSushis)
  }, [])
  
  // Only 4 sushi are rendered at a time.
	const selectFourSushis = () => {
		return allSushi.slice(sushiIndex, sushiIndex + 4)
	}

  function addPlate(oneSushi) {
    // subtract the price from the money amount when we take 4 sushis after rendering 
    const newWallet = money - oneSushi.price
    if (newWallet > 0) {
      setEatenSushi([oneSushi, ...eatenSushi])
      setMoney(money - oneSushi.price)
      return true
    }
    return false
  }

	return (
		<div className="app">
			<SushiContainer
				fourSushis={selectFourSushis()}
				setSushiIndex={setSushiIndex}
				sushiIndex={sushiIndex}
        addPlate={addPlate}
			/>
			<Table plates={eatenSushi} money={money}/>
		</div>
	)
}

export default App;
