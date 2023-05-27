onEvent('recipes', event => {
	// Change recipes heree
	event.custom({
		type: 'thermal:chiller',
		ingredients: [

			{ amount: 1000, fluid: 'immersiveengineering:redstone_acid', nbt: {} }
		],
		results: [
			{ item: 'minecraft:redstone', count: 4 }
		],
		energy: 15000
	})

	event.custom({
		type: 'thermal:chiller',
		ingredients: [

			{ amount: 100, fluid: 'mekanism:lithium', nbt: {} }
		],
		results: [
			Item.of('mekanism:dust_lithium').toJson(),
		],
		energy: 20000
	})

	event.custom({
		type: 'thermal:chiller',
		ingredients: [
			Ingredient.of('kubejs:sintered_superconductor_pellet').toJson(),
			{ amount: 1000, fluid: 'kubejs:cryogenic_coolant', nbt: {} }
		],
		results: [
			Item.of('kubejs:superconductor').toJson(),
		],
		energy: 20000
	})

	event.custom({
		type: 'thermal:chiller',
		ingredients: [
			{ amount: 90, fluid: 'kubejs:molten_enderium_alloy_base', nbt: {} }
		],
		results: [
			Item.of('kubejs:crude_enderium_alloy_base').toJson(),
		],
		energy: 10000
	})

	event.recipes.thermal.chiller('createchromaticreturn:shadow_steel', [Fluid.of('createchromaticreturn:shadow_essence', 1000), 'thermal:chiller_ingot_cast']).energy(5000).id('thermal:chiller/shadow_steel')

	event.recipes.thermal.chiller('createchromaticreturn:refined_radiance', [Fluid.of('createchromaticreturn:refined_mixture', 1000), 'thermal:chiller_ingot_cast']).energy(5000).id('thermal:chiller/refined_radiance')

	event.recipes.thermal.chiller('createchromaticreturn:chromatic_compound', [Fluid.of('createchromaticreturn:chromatic_mixture', 1000), 'thermal:chiller_ingot_cast']).energy(5000).id('thermal:chiller/chromatic_compound')
})

