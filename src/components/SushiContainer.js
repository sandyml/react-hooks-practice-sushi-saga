import React from 'react';
// import React, { useEffect, useState } from 'react';
import MoreButton from './MoreButton';
import Sushi from './Sushi';

function SushiContainer({ fourSushis, setSushiIndex, sushiIndex, addPlate }) {

	const renderAllSushis = () => {
		// iterate over the four sushis only 4 sushi are rendered at a time.
		return fourSushis.map((oneSushi) => {
			return (
			<Sushi 
			oneSushi={oneSushi} 
			key={oneSushi.id} 
			addPlate={addPlate} 
			/>
			)
		})
	}


	return (
		<div className="belt">
			{renderAllSushis()}
			<MoreButton
				setSushiIndex={setSushiIndex}
				sushiIndex={sushiIndex}
			/>
		</div>
	)
}

export default SushiContainer;
