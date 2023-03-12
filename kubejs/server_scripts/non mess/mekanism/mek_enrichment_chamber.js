onEvent('recipes', event => {
	// Change recipes here
	
    event.custom({
		type: 'mekanism:enriching',
		input: [
			{ingredient: 	
				{item: 'kubejs:refined_redstone_blend', count:1}
			}
		],
		output: { item: 'mekanism:enriched_redstone', count:1},
	})
	event.custom({
		type: 'mekanism:enriching',
		input: [
			{ingredient: 	
				{item: 'kubejs:impure_quartz_crystal', count:1}
			}
		],
		output: { item: 'minecraft:quartz', count:1},
	})
	

})

