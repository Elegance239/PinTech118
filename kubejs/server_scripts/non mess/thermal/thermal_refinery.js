onEvent('recipes', event => {
	// Change recipes here
	
	event.custom({
		type: 'thermal:refinery',
		ingredients: [
			{fluid: 'kubejs:redstone_slag_slurry', amount: 1000},
		],
		results: [
			{item: 'kubejs:redstone_slag_powder', chance: 0.6},
			{fluid:'immersiveengineering:redstone_acid', amount: 1000},
		],
		energy: 20000,
	})

})

