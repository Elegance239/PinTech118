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
	
	event.custom({
		type: 'thermal:smelter',
		ingredients:[
			{ item: 'minecraft:brick', count:1},
			{ item: 'minecraft:andesite', count:1},
		],
		results: [
			{ item: 'kubejs:crude_alumina', count:1},
		],
		energy: 4000,
	})
	event.custom({
		type: 'thermal:smelter',
		ingredients:[
			{ item: 'minecraft:brick', count:4},
			{ item: 'minecraft:andesite', count:4},
			{ tag: 'quark:corundum', count:1},
		],
		results: [
			{ item: 'kubejs:crude_alumina', count:12},
		],
		energy: 16000,
	})
	event.custom({
		type: 'thermal:smelter',
		ingredients:[
			{ item: 'thermal:electrum_ingot', count:8},
			{ item: 'thermal:tin_ingot', count:10},
			{ item: 'minecraft:glowstone_dust', count:20},
		],
		results: [
			{ item: 'thermal:lumium_ingot', count:1},
		],
		energy: 4000,
	})

	event.custom({
		type: 'thermal:smelter',
		ingredients: [
			{ item: 'kubejs:impure_gold', count: 1},
		],
		results: [
			{item: 'kubejs:gold_drop', chance: 0.9},
		],
		energy: 700,
	})

	event.custom({
		type: 'thermal:smelter',
		ingredients:[
			{ item: 'mekanism:alloy_reinforced', count:40},
			{ item: 'minecraft:netherite_ingot', count:4},
			{ item: 'kubejs:reinforcement_catalyst' },
		],
		results: [
			
			Item.of('2x kubejs:contaminated_reinforcement_catalyst'),
		],
		energy: 8000,
	})
})
