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
})

