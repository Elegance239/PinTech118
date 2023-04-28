onEvent('recipes', event => {
	// Change recipes here
	
	event.custom({
		type: 'thermal:refinery',
		ingredients: [
			{fluid: 'kubejs:redstone_slag_slurry', amount: 1000},
		],
		results: [
			{item: 'kubejs:redstone_slag_powder', chance: 0.6},
			{fluid:'immersiveengineering:redstone_acid', amount: 1000},
		],
		energy: 20000,
	})


	event.recipes.thermal.refinery([Item.of('kubejs:poo'), Fluid.of('kubejs:piss', 200), Fluid.of('kubejs:waste', 1000)] ,Fluid.of('industrialforegoing:sewage', 2000))

	event.custom({
		type: 'thermal:refinery',
		ingredients: [
			{fluid: 'kubejs:impure_alumina_solution', amount: 100},
		],
		results: [
			{item: 'kubejs:slag_powder', chance: 0.5},
			{fluid:'kubejs:alumina_solution', amount: 100},
		],
		energy: 10000,
	})
})

