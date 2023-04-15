onEvent('recipes', event => {
	// Change recipes here

	event.custom({
		type: 'thermal:smelter',
		ingredients:[
			Ingredient.of('2x pneumaticcraft:ingot_iron_compressed').toJson(),
			Ingredient.of('4x thermal:electrum_ingot').toJson(),
			Ingredient.of('4x minecraft:netherite_scrap').toJson(),
		],
		results: [
			Item.of('kubejs:unprocessed_netherite_alloy').toJson(),
		],
		energy: 24000,
	})
	event.custom({
		type: 'thermal:smelter',
		ingredients:[
			Item.of("extrastorage:raw_neural_processor").toJson(),
			Ingredient.of('3x #forge:dusts/lithium').toJson(),
			Item.of("kubejs:silicon_wafer").toJson(),
		],
		results: [
			Item.of('kubejs:doped_neural_processor').toJson(),
		],
		energy: 30000,
	})
	event.custom({
		type: 'thermal:smelter',
		ingredients:[
			Ingredient.of('#forge:dusts/enderium').toJson(),
			Ingredient.of('2x #forge:dusts/signalum').toJson(),
			Ingredient.of('4x #forge:dusts/osmium').toJson(),
		],
		results: [
			Item.of('kubejs:superconducting_mixture').toJson(),
		],
		energy: 80000,
	})
	event.custom({
		type: 'thermal:smelter',
		ingredients:[
			{ item: 'kubejs:reinforced_alloy_base', count:3},
			Ingredient.of('kubejs:reinforcement_catalyst').toJson(),
		],
		results: [
			{ item: 'mekanism:alloy_reinforced', count:3},
			Ingredient.of('kubejs:contaminated_reinforcement_catalyst').toJson(),
		],
		energy: 8000,
	})
	

})
