onEvent('recipes', event => {
	// Change recipes here

	event.custom({
		type: "thermal:bottler",
		ingredient: [
			{ amount: 50, fluid: "immersiveengineering:redstone_acid", nbt:{}},
			{ item: 'kubejs:ground_dripstone'},
		],
		result: [
			{
				item: "kubejs:acidified_ground_dripstone",
			},
		],
	})

	event.custom({
		type: "thermal:bottler",
		ingredient: [
			{ amount: 4000, fluid: "pneumaticcraft:lubricant", nbt:{}},
			{ item: 'kubejs:advanced_machine_frame_5'},
		],
		result: [
			{
				item: 'industrialforegoing:machine_frame_advanced',
			},
		],
	})

	

})

