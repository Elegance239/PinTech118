onEvent('recipes', event => {
	// Change recipes here

	event.custom({
		type: 'thermal:crucible',
		ingredients: [


			{ tag: 'forge:ingots/tin', count: 1 }
		],
		results: [
			{ amount: 90, fluid: 'tconstruct:molten_tin' }


		],

		energy: 10000
	})

	event.custom({
		type: 'thermal:crucible',
		ingredients: [


			{ tag: 'forge:ingots/lead', count: 1 }
		],
		results: [
			{ amount: 90, fluid: 'tconstruct:molten_lead' }
		],
		energy: 10000
	})

	event.custom({
		type: 'thermal:crucible',
		ingredients: [


			{ tag: 'forge:ingots/compressed_iron', count: 1 }
		],
		results: [
			{ amount: 90, fluid: 'kubejs:molten_compressed_iron' }
		],
		energy: 10000
	})

	event.recipes.thermal.crucible(Fluid.of('createchromaticreturn:chromatic_mixture', 5000), 'createchromaticreturn:chromatic_compound')
})

