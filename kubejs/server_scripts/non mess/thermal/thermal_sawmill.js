onEvent('recipes', event => {
	// Change recipes here
	
    event.custom({
		type: 'thermal:sawmill',
		ingredients: [
			{item: 'minecraft:raw_gold'},
		],
		results: [
			{item: 'kubejs:cut_gold',
			 count: 3,
			},
		]
	})

	event.custom({
		type: 'thermal:sawmill',
		ingredients: [
			{item: 'minecraft:gold_ingot'},
		],
		results: [
			{item: 'kubejs:cut_gold',
			 count: 3,
			},
		]
	})

	event.custom({
		type: 'thermal:sawmill',
		ingredients: [
			{item: 'kubejs:core_machine_frame'},
		],
		results: [
			{item: 'kubejs:cut_machine_frame'},
		]
	})
})

