import React from 'react';

function MoreButton({ setSushiIndex, sushiIndex }) {

  const clickHandler = () => {
    // console.log(event.target.target)
    setSushiIndex(sushiIndex + 4)
  }
  
	return (
		<button onClick={clickHandler}>
			More sushi!
		</button>
	)
}

export default MoreButton;
