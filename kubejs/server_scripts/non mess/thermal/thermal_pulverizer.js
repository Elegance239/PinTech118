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

	event.custom({
        type: "thermal:pulverizer",
        ingredient: {
          item: "kubejs:acidified_ground_dripstone",
          count:1
        },
        result: [
          {
            item: "kubejs:raw_copper_mote",
            chance:0.3
          },
          {
            item: "kubejs:raw_tin_mote",
            chance:0.1
          }
        ],
        energy: 1000
	})
})

