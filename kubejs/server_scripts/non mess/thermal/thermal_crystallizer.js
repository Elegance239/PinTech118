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

		energy: 2000
	})
	event.custom({
		type: 'thermal:crystallizer',
		ingredients: [

            { amount: 200, fluid: 'kubejs:silica_rich_water', nbt: {}},
			{ tag: 'forge:dusts/quartz', count:1}
		],
		results: [
            { item: 'kubejs:impure_quartz_crystal', count:5},

		
		],

		energy: 15000
	})
	/*
	event.custom({
		type: 'thermal:crystallizer',
		ingredients: [

            { amount: 1000, fluid: 'kubejs:liquid_calcium_dicyanoaurate', nbt: {}},
			{ item: 'mekanism:enriched_carbon', count:3}
		],
		results: [
            { item: 'kubejs:impure_gold', count:3},
		],

		energy: 200
	})


	event.custom({
		type: 'thermal:crystallizer',
		ingredients: [

            { amount: 1000, fluid: 'kubejs:liquid_calcium_dicyanoaurate', nbt: {}},
			{ item: 'kubejs:highly_enriched_carbon', count:5}
		],
		results: [
            { item: 'kubejs:impure_gold', count:6},
		],

		energy: 400
	})

	event.custom({
		type: 'thermal:crystallizer',
		ingredients: [

            { amount: 1000, fluid: 'kubejs:liquid_sodium_dicyanoaurate', nbt: {}},
			{ item: 'mekanism:enriched_carbon', count:3}
		],
		results: [
            { item: 'kubejs:impure_gold', count:6},
		],

		energy: 500
	})

	event.custom({
		type: 'thermal:crystallizer',
		ingredients: [

            { amount: 1000, fluid: 'kubejs:liquid_sodium_dicyanoaurate', nbt: {}},
			{ item: 'kubejs:highly_enriched_carbon', count:5}
		],
		results: [
            { item: 'kubejs:impure_gold', count:12},
		],

		energy: 600
	})
	*/

	event.custom({
		type: 'thermal:crystallizer',
		ingredients: [

            { amount: 90, fluid: 'kubejs:molten_compressed_iron', nbt: {}},
			{ item: 'mekanism:alloy_infused', count:2},
			{ item: 'kubejs:aqueous_ingot', count:2}
		],
		results: [
            { item: 'kubejs:reinforced_alloy_base', count:1},
		],

		energy: 3000
	})
})

