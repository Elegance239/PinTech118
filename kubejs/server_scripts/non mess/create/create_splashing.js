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

	/* event.recipes.createSplashing(
		[Item.of('minecraft:flint').withChance(0.25), Item.of('3x kubejs:raw_iron_mote').withChance(0.12)],
		Item.of('minecraft:gravel')
	) */

	event.custom({
		type: 'create:splashing',
		ingredients: [
			Ingredient.of('minecraft:gravel').toJson(),
		],
		results: [
			Item.of('minecraft:flint').withChance(0.25),
			Item.of('3x kubejs:raw_iron_mote').withChance(0.12),
		]
	})
	event.recipes.createSplashing(
		Item.of('9x minecraft:gold_nugget'),
		Item.of('create:crushed_raw_gold'),
	)
})