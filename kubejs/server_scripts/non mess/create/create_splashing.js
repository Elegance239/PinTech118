onEvent('recipes', event => {
	// Change recipes here
	
	
	event.custom({
		type: 'create:splashing',
		ingredients: [
			Ingredient.of('kubejs:reinforced_stone_powder').toJson(),
		],
		results: [
			Item.of('pneumaticcraft:reinforced_stone').toJson(),
		],
	})

	event.custom({
		type: 'create:splashing',
		ingredients: [
			Ingredient.of('kubejs:calcium_oxide').toJson(),
		],
		results: [
			Item.of('kubejs:calcium_hydroxide').toJson(),
		]
	})

	event.custom({
		type: 'create:splashing',
		ingredients: [
			Ingredient.of('kubejs:pressurized_machine_frame').toJson(),
		],
		results: [
			Item.of('industrialforegoing:machine_frame_supreme').toJson(),
		]
	})
})