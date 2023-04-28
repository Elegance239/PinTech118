onEvent('recipes', event => {
	// Change recipes here

	event.custom({
		type: "thermal:bottler",
		ingredient: [
			{ amount: 5, fluid: "immersiveengineering:redstone_acid", nbt:{}},
			{ item: 'kubejs:ground_dripstone'},
		],
		result: [
			{
				item: "kubejs:acidified_ground_dripstone",
			},
		],
	})

	event.custom({
		type: "thermal:bottler",
		ingredient: [
			{ amount: 4000, fluid: "pneumaticcraft:lubricant", nbt:{}},
			{ item: 'kubejs:advanced_machine_frame_5'},
		],
		result: [
			{
				item: 'industrialforegoing:machine_frame_advanced',
			},
		],
		energy: 10000
	})

	event.recipes.thermal.bottler(
		'kubejs:filled_machine_frame', 
		[Fluid.of('thermal:resin', 5000), 'kubejs:core_machine_frame']
	).energy(2000)
	
	event.recipes.thermal.bottler(
		'advgenerators:iron_wiring', 
		[Fluid.of('thermal:redstone', 800), 'advgenerators:iron_tubing']
	).energy(2000)
	
	event.recipes.thermal.bottler(
		'createaddition:biomass', 
		[Fluid.of('createaddition:seed_oil', 100), Item.of('8x mekanism:bio_fuel')]
	).energy(2000)
	event.recipes.thermal.bottler(
		'createaddition:biomass', 
		[Fluid.of('pneumaticcraft:vegetable_oil', 100), Item.of('8x mekanism:bio_fuel')]
	).energy(2000)
	event.recipes.thermal.bottler(
		'createaddition:biomass', 
		[Fluid.of('immersiveengineering:plantoil', 100), Item.of('8x mekanism:bio_fuel')]
	).energy(2000)
		
})

