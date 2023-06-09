onEvent('recipes', event => {
	// Change recipes heree
	event.custom({
		type: 'thermal:chiller',
		ingredients: [

            { amount: 1000, fluid: 'immersiveengineering:redstone_acid', nbt: {}}
		],
		results: [
            {item:'minecraft:redstone', count:4}
		],
		energy: 15000
	})

	event.custom({
		type: 'thermal:chiller',
		ingredients: [

            { amount: 100, fluid: 'mekanism:lithium', nbt: {}}
		],
		results: [
            Item.of('mekanism:dust_lithium').toJson(),
		],
		energy: 20000
	})

	event.recipes.thermal.chiller('createchromaticreturn:shadow_steel', [Fluid.of('createchromaticreturn:shadow_essence', 8000), 'thermal:chiller_ingot_cast']).energy(5000).id('thermal:chiller/shadow_steel')

	event.recipes.thermal.chiller('createchromaticreturn:refined_radiance', [Fluid.of('createchromaticreturn:refined_mixture', 8000), 'thermal:chiller_ingot_cast']).energy(5000).id('thermal:chiller/refined_mixture')
})

