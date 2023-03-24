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


})

