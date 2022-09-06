import React, { useState } from 'react';
// import React, { useEffect, useState } from 'react';

function Sushi({ oneSushi, addPlate }) {
	const [showSushi, setShowSushi] = useState(true)

  // click function for eat button 
	const eatSushiHandler = () => {
    if (showSushi && addPlate(oneSushi)) {
      setShowSushi(false)
    }
	}

	return (
		<div className="sushi">
			<div className="plate" onClick={eatSushiHandler}>
				{showSushi ? (
					<img src={oneSushi.img_url} alt={oneSushi.name} width="100%" />
				      ) : null}
			</div>
			<h4 className="sushi-details">
				{oneSushi.name} - ${oneSushi.price}
			</h4>
		</div>
	)
}
// {eatenSushi ? null : <img src={img_url} alt={name} width="100%" />}

export default Sushi;
