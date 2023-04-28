onEvent('recipes', event => {
	// Change recipes here
	
	
	event.custom({
		type: 'thermal:pulverizer',
		ingredients: [
			{ tag: 'forge:glass', count: 1},
		],
		results: [
			{ item: 'quark:clear_shard', count:4}
		],

		energy: 4000
	})

	event.recipes.thermal.pulverizer(
		Item.of('kubejs:chromatic_dust'), 
		Item.of('createchromaticreturn:chromatic_compound')
	).energy(2000)

	event.recipes.thermal.pulverizer(
		Item.of('4x kubejs:slag_powder'), 
		{ tag: 'forge:slag', count: 1},
	).energy(2000)
})

