onEvent('recipes', event => {
	// Change recipes here
	
    event.custom({
		type: 'thermal:crystallizer',
		ingredients: [

            { amount: 100, fluid: 'thermal:redstone', nbt: {}},
			{ item: 'minecraft:redstone', count:1}
		],
		results: [
            { item: 'kubejs:refined_redstone_blend', count:2},

		
		],

		energy: 10000
	})
	event.custom({
		type: 'thermal:crystallizer',
		ingredients: [

            { amount: 200, fluid: 'kubejs:silica_rich_water', nbt: {}},
			{ tag: 'forge:dusts/quartz', count:1}
		],
		results: [
            { item: 'kubejs:impure_quartz_crystal', count:4},

		
		],

		energy: 20000
	})

})

