onEvent('recipes', event => {
	// Change recipes here
	
	
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('create:rose_quartz').toJson(),
			Ingredient.of('#forge:slag').toJson(),
			Ingredient.of('#forge:slag').toJson(),
			Ingredient.of('#forge:slag').toJson(),
			Ingredient.of('#forge:slag').toJson(),
			Ingredient.of('#forge:slag').toJson(),
            { fluid: 'minecraft:water', amount: 1000}
		],
		results: [
			{ amount: 1000, fluid: 'kubejs:redstone_slag_slurry', nbt: {}}
		],
		heatRequirement: 'heated',
	})

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('kubejs:redstone_slag_powder').toJson(),
			Ingredient.of('#forge:slag').toJson(),
			Ingredient.of('#forge:slag').toJson(),
			Ingredient.of('#forge:slag').toJson(),
			Ingredient.of('#forge:slag').toJson(),
			Ingredient.of('#forge:slag').toJson(),
            { fluid: 'minecraft:water', amount: 1000}
		],
		results: [
			{ amount: 1000, fluid: 'kubejs:redstone_slag_slurry', nbt:{}},
			Item.of('kubejs:slag_powder').toJson()
		],
		heatRequirement: 'heated',
	})

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('minecraft:quartz').toJson(),
			Ingredient.of('minecraft:redstone_block').toJson(),
		],
		results: [
			{item:'create:rose_quartz', count: 2},
		]

	})
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{ fluid: 'minecraft:water', amount: 250},
			Ingredient.of('minecraft:redstone').toJson(),
		],
		results: [
			{ fluid: 'immersiveengineering:redstone_acid', amount: 250}
		]

	})

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
            { fluid: 'minecraft:water', amount: 1000}
		],
		results: [
			Item.of('thermal:rubber').toJson()
		]
	})

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('#forge:dusts/sulfur').toJson(),
			Ingredient.of('thermal:rubber').toJson(),
			Ingredient.of('thermal:rubber').toJson(),
			Ingredient.of('thermal:rubber').toJson(),
			Ingredient.of('thermal:rubber').toJson(),
            { fluid: 'minecraft:water', amount: 1000}
		],
		results: [
			{item:'industrialforegoing:plastic', count: 6},
		],
		heatRequirement: 'heated',
	})

	event.recipes.create.mixing(Fluid.of('tconstruct:molten_obsidian', 1000), [Fluid.of('minecraft:water', 500), 'minecraft:obsidian']).superheated().id('create:mixing/molten_obsidian')

})